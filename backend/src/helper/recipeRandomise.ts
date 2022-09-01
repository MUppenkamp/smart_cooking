import { createPool, disconnectPool, pgQuery } from './pgQuery';
import { GetAllRecipeDBO, TIngredientsDBO } from '../types/DBO/Recipe';


export const recipeRandomise = async (userid: number) => {
    const neededRecipe = 5;
    // Check if the we need a new recipe

    const connection = createPool();

    const createRecipeWeek = "INSERT INTO recipe_week(user_id, start_date, end_date) VALUES($1, $2, $3)";


    if (neededRecipe <= 0) {
        return null;
    }

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
        randomRecipe.push(result.rows[randomIndex].id);
    }

    // endregion

    // region saveIdToRecipe

    const dataArray: TIngredientsDBO[] = [];

    const promises = randomRecipe.map(async (id) => {
        // Add to db



        const query = `SELECT 
                ri.id
                FROM recipe_ingredient as ri
                WHERE ri.recipe_id = $1`;

        const result = await pgQuery<TIngredientsDBO['id']>(connection, query, [id]);

        // Add list to db
    });

    await Promise.all(promises);






    // endregion

    await disconnectPool(connection);
}



