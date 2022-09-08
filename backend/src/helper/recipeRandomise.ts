import { createPool, disconnectPool, pgQuery } from './pgQuery';
import { GetAllRecipeDBO, TIngredientsDBO } from '../types/DBO/Recipe';
import { addDays, differenceInDays, nextMonday, nextSunday } from 'date-fns';
import { RecipeWeekDBO } from '../types/DBO/RecipeWeek';
import { Pool } from 'pg';


export const recipeRandomise = async (userid: number) => {
    const neededRecipe = 7;
    const connection = createPool();

    const today = new Date();
    const nextWeek = addDays(new Date(), 6);

    const checkNextRecipeWeek = `SELECT * 
        FROM recipe_week 
        WHERE user_id = $1 AND
        date_trunc('week',start_date) = date_trunc('week',TO_DATE($2, 'yyyy-mm-dd'))`;
    const nowRecipeWeekCheck = await pgQuery(connection, checkNextRecipeWeek, [userid, today]);
    const recipeWeekCheck = await pgQuery(connection, checkNextRecipeWeek, [userid, nextWeek]);

    const getRecipe = `SELECT r.id, 
        r.name, 
        r.duration, 
        r.description, 
        r.calorific_value,
        r.protein, 
        r.fat, 
        r.carbohydrates, 
        r.portion,
        r.picture,
        d.name as difficulty_name,
        d.id as difficulty_id,
        u2c.is_favorite,
        u2c.is_own
        from recipe as r
        LEFT JOIN difficulty as d ON d.id = r.difficulty_id
        LEFT JOIN user_2_recipe as u2c ON u2c.recipe_id = r.id AND u2c.user_id = $1
        WHERE u2c.user_id IS NOT NULL AND (u2c.is_favorite IS true OR u2c.is_own IS true)`;

    const result = await pgQuery<GetAllRecipeDBO>(connection, getRecipe, [userid]);

    if (!result?.rowCount || result.rowCount <= 0) {
        return null;
    }

    const createRecipeWeek = `INSERT INTO recipe_week(user_id, start_date, end_date) VALUES($1, $2, $3) RETURNING *`;


    if (!nowRecipeWeekCheck?.rowCount || nowRecipeWeekCheck.rowCount <= 0) {
        const nowDate = new Date();
        const futureDate = nextSunday(new Date());
        const createdRecipeWeek = await pgQuery<RecipeWeekDBO>(connection, createRecipeWeek, [userid, nowDate, futureDate]);

        if (createdRecipeWeek?.rowCount && createdRecipeWeek.rowCount > 0) {
            await createRecipe(connection, userid, createdRecipeWeek.rows[0].id, differenceInDays(futureDate, nowDate), nowDate);
        }
    }

    if (recipeWeekCheck?.rowCount && recipeWeekCheck.rowCount > 0) return;

    if (neededRecipe <= 0)
        return null;

    const nowDate = nextMonday(new Date());
    const futureDate = addDays(nowDate, 6);

    const createdRecipeWeek = await pgQuery<RecipeWeekDBO>(connection, createRecipeWeek, [userid, nowDate, futureDate]);

    if (!createdRecipeWeek?.rowCount || createdRecipeWeek.rowCount <= 0)
        return null;

    await createRecipe(connection, userid, createdRecipeWeek.rows[0].id, neededRecipe, nowDate);

    // endregion
    // endregion
    await disconnectPool(connection);
}

const createRecipe = async (connection: Pool, userid: number, recipeWeekId: number, neededRecipe: number, startDate: Date) => {

    // region favorite
    const getRecipe = `SELECT r.id, 
        r.name, 
        r.duration, 
        r.description, 
        r.calorific_value,
        r.protein, 
        r.fat, 
        r.carbohydrates, 
        r.portion,
        r.picture,
        d.name as difficulty_name,
        d.id as difficulty_id,
        u2c.is_favorite,
        u2c.is_own
        from recipe as r
        LEFT JOIN difficulty as d ON d.id = r.difficulty_id
        LEFT JOIN user_2_recipe as u2c ON u2c.recipe_id = r.id AND u2c.user_id = $1
        WHERE u2c.user_id IS NOT NULL AND (u2c.is_favorite IS true OR u2c.is_own IS true)`;

    const result = await pgQuery<GetAllRecipeDBO>(connection, getRecipe, [userid]);

    if (!result?.rowCount || result.rowCount <= 0) {
        return null;
    }


    // endregion

    // region selectRandom recipe (randomRecipe)

    const randomRecipe: number[] = [];

    for (let i = 0; i < neededRecipe; i++) {
        const randomIndex = Math.floor(Math.random() * result.rowCount);
        if (!result.rows[randomIndex].id) return;
        randomRecipe.push(result.rows[randomIndex].id);
    }

    // endregion

    // region saveIdToRecipe

    const createRecipeDay = `INSERT INTO recipe_week_day (recipe_week_id, day_date, recipe_id) VALUES ($1, $2, $3) RETURNING id`;

    const promises = randomRecipe.map(async (id,index) => {

        const dayDate = addDays(startDate, index);

        const day = await pgQuery<{id: number}>(connection, createRecipeDay, [recipeWeekId, dayDate, id]);
        if (!day?.rowCount || day.rowCount <= 0) return;

        const query = `SELECT 
                *
                FROM recipe_ingredient as ri
                WHERE ri.recipe_id = $1`;

        const result = await pgQuery<TIngredientsDBO>(connection, query, [id]);

        const createWeekDayShoppingList = `
            INSERT INTO recipe_week_day_shopping_list (
            is_checked,
            recipe_week_day_id,
            recipe_ingredient) VALUES ($1, $2, $3)`;

        if (!result?.rowCount || result.rowCount <= 0) return;
        const ingredientPromises = result.rows.map(async (rt) => {
            try {
                await pgQuery(connection, createWeekDayShoppingList, [false, day.rows[0].id, rt.id])
            } catch (e) {
                console.log("Error -----------------------------------")
                console.log(e);
            }
            });
        await Promise.all(ingredientPromises);
    });

    await Promise.all(promises);
}



