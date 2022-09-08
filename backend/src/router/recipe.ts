import express from 'express'
import { createPool, disconnectPool, pgQuery } from '../helper/pgQuery';
import type { TIngredients, TRecipeDTO, TShoppingListIngredients } from '../types/DTO/Recipe';
import type { GetAllRecipeDBO, TIngredientsDBO } from '../types/DBO/Recipe';
import { recipeRandomise } from '../helper/recipeRandomise';
import { TIngredientWithRecipeId } from '../types/DBO/Recipe';
import { TShoppingListRecipeDTO } from '../types/DTO/Recipe';

const router = express.Router();

router.get('/:userid', async (req, res) => {
    if (!req.params.userid) {
        res.status(400).json({});
        return;
    }

    const recipePromise = recipeRandomise(Number(req.params.userid));

    // Get recipe
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
        WHERE u2c.is_own IS NULL OR u2c.is_own IS FALSE
        `;
    const connection = createPool();
    const result = await pgQuery<GetAllRecipeDBO>(connection, getRecipe, [req.params.userid]);

    if (!result?.rowCount || result?.rowCount <= 0) {
        res.status(204).json({});
        return;
    }

    const dataArray: TRecipeDTO[] = [];

    const promises = result.rows.map(async (recipe) => {
        const query = `SELECT 
                ri.id, 
                ri.recipe_id, 
                ri.name, 
                ri.quantity, 
                ri.quantity_unit_id,
                qu.name as quantity_unit_name
                FROM recipe_ingredient as ri 
                    LEFT JOIN quantity_unit as qu ON qu.id = ri.quantity_unit_id
                WHERE ri.recipe_id = $1`;

        const result = await pgQuery<TIngredientsDBO>(connection, query, [recipe.id]);


        dataArray.push({
            id: recipe.id,
            name: recipe.name,
            calorificValue: recipe.calorific_value,
            carbohydrates: recipe.carbohydrates,
            description: recipe.description,
            difficultyName: recipe.difficulty_name,
            fat: recipe.fat,
            duration: recipe.duration,
            isFavorite: recipe.is_favorite,
            isOwn: recipe.is_own,
            picture: recipe.picture,
            portion: recipe.portion,
            protein: recipe.protein,
            ingredients: result?.rows.map((r) => ({
                name: r.name,
                quantityUnitId: r.quantity_unit_id,
                quantityUnitName: r.quantity_unit_name,
                id: r.id,
                quantity: r.quantity
            }) as TIngredients)
        })
    });

    await Promise.all([...promises, recipePromise]);

    await disconnectPool(connection);

    res.status(200).json({
        data: dataArray
    })
});

router.get('/:userid/favorite', async (req, res) => {
    if (!req.params.userid) {
        res.status(400).json({});
        return;
    }

    const recipePromise = recipeRandomise(Number(req.params.userid));

    // Get recipe
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

    const connection = createPool();
    const result = await pgQuery<GetAllRecipeDBO>(connection, getRecipe, [req.params.userid]);

    if (!result?.rowCount || result?.rowCount <= 0) {
        res.status(204).json({});
        return;
    }

    const dataArray: TRecipeDTO[] = [];

    const promises = result.rows.map(async (recipe) => {
        const query = `SELECT 
                ri.id, 
                ri.recipe_id, 
                ri.name, 
                ri.quantity, 
                ri.quantity_unit_id,
                qu.name as quantity_unit_name
                FROM recipe_ingredient as ri 
                    LEFT JOIN quantity_unit as qu ON qu.id = ri.quantity_unit_id
                WHERE ri.recipe_id = $1`;

        const result = await pgQuery<TIngredientsDBO>(connection, query, [recipe.id]);


        dataArray.push({
            id: recipe.id,
            name: recipe.name,
            calorificValue: recipe.calorific_value,
            carbohydrates: recipe.carbohydrates,
            description: recipe.description,
            difficultyName: recipe.difficulty_name,
            fat: recipe.fat,
            duration: recipe.duration,
            isFavorite: recipe.is_favorite,
            isOwn: recipe.is_own,
            picture: recipe.picture,
            portion: recipe.portion,
            protein: recipe.protein,
            ingredients: result?.rows.map((r) => ({
                name: r.name,
                quantityUnitId: r.quantity_unit_id,
                quantityUnitName: r.quantity_unit_name,
                id: r.id,
                quantity: r.quantity
            }) as TIngredients)
        })
    });

    await Promise.all([...promises, recipePromise]);

    await disconnectPool(connection);

    res.status(200).json({
        data: dataArray
    })

})

router.get('/:userid/calendar', async (req, res) => {
    if (!req.params.userid) {
        res.status(400).json({});
        return;
    }

    const selectIds = `
            SELECT
            rwd.id,
            rwd.recipe_week_id,
            rwd.day_date,
            rwd.recipe_id,
            u2r.user_id
                FROM recipe_week_day rwd
                JOIN user_2_recipe u2r on rwd.recipe_id = u2r.recipe_id
                WHERE u2r.user_id = $1
    `;

    const selectIngredient = `
                SELECT
                    ri.*
                FROM recipe_week_day_shopping_list rwdsl
                    JOIN recipe_ingredient ri on ri.id = rwdsl.recipe_ingredient
                    JOIN recipe_week_day rwd on rwd.id = rwdsl.recipe_week_day_id
                WHERE rwd.recipe_week_id = $1
    `;

    const selectRecipe = `SELECT r.id, 
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
        LEFT JOIN user_2_recipe as u2c ON u2c.recipe_id = r.id
        WHERE r.id = $1
        `;

    const connection = createPool();

    const ids = await pgQuery<{
        id: number,
        recipe_week_id: number,
        day_date: Date,
        recipe_id: number,
        user_id: number
    }>(connection, selectIds, [Number(req.params.userid)]);

    if (!ids?.rowCount || ids.rowCount <= 0) {
        res.status(204).json({});
        return
    }

    const queryRecipeIds: number[] = [];
    const queryIngredientIds: number[] = [];

    ids.rows.forEach((id) => {
        const recipeIdFindIndex = queryRecipeIds.findIndex((el) => el === id.recipe_id);
        const ingredientIdFindIndex = queryIngredientIds.findIndex((el) => el === id.recipe_week_id);

        if (recipeIdFindIndex < 0) {
            queryRecipeIds.push(id.recipe_id);
        }

        if (ingredientIdFindIndex < 0) {
            queryIngredientIds.push(id.recipe_week_id);
        }

    });

    const recipes: GetAllRecipeDBO[] = [];
    const ingredients: TIngredientWithRecipeId[] = [];

    const recipePromise = queryRecipeIds.map(async (id) => {
        const recipe = await pgQuery<GetAllRecipeDBO>(connection, selectRecipe, [id]);
        if (!recipe?.rowCount || recipe.rowCount < 0) return;
        recipes.push(recipe.rows[0]);
    });

    const ingredientPromise = queryIngredientIds.map(async (id) => {
        const ingredient = await pgQuery<TIngredientWithRecipeId>(connection, selectIngredient, [id]);
        if (!ingredient?.rowCount || ingredient.rowCount < 0) return;
        ingredients.push(ingredient.rows[0]);
    });

    await Promise.all(recipePromise);
    await Promise.all(ingredientPromise);

    const returnValue: {
        date: Date,
        recipe: TRecipeDTO
    }[] = [];

    ids.rows.forEach((elem) => {
        const recipe = recipes.find((rs) => rs.id === elem.recipe_id);
        if (!recipe) return;

        const idts = ingredients.filter((elem) => elem.recipe_id === elem.recipe_id);

        returnValue.push({
            date: elem.day_date,
            recipe: {
                id: recipe.id,
                name: recipe.name,
                protein: recipe.protein,
                portion: recipe.portion,
                picture: recipe.picture,
                isOwn: recipe.is_own,
                isFavorite: recipe.is_favorite,
                fat: recipe.fat,
                duration: recipe.duration,
                carbohydrates: recipe.carbohydrates,
                description: recipe.description,
                difficultyName: recipe.difficulty_name,
                calorificValue: recipe.calorific_value,
                ingredients: idts.map((elem) => ({
                    id: elem.id,
                    quantity: elem.quantity,
                    name: elem.name,
                    quantityUnitName: elem.quantity_unit_name,
                    quantityUnitId: elem.quantity_unit_id
                } as TIngredients))
            }
        })
    })

    res.status(200).json({
        data: returnValue
    });
})

router.get('/:userid/shopping/list', async (req, res) => {
    if (!req.params.userid) {
        res.status(400).json({});
        return;
    }

    const selectIds = `
            SELECT
            rwd.id,
            rwd.recipe_week_id,
            rwd.day_date,
            rwd.recipe_id,
            u2r.user_id
                FROM recipe_week_day rwd
                JOIN user_2_recipe u2r on rwd.recipe_id = u2r.recipe_id
                WHERE u2r.user_id = $1
    `;

    const selectIngredient = `
                SELECT
                    ri.*,
                    rwdsl.is_checked
                FROM recipe_week_day_shopping_list rwdsl
                    JOIN recipe_ingredient ri on ri.id = rwdsl.recipe_ingredient
                    JOIN recipe_week_day rwd on rwd.id = rwdsl.recipe_week_day_id
                WHERE rwd.recipe_week_id = $1
    `;

    const selectRecipe = `SELECT r.id, 
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
        LEFT JOIN user_2_recipe as u2c ON u2c.recipe_id = r.id
        WHERE r.id = $1
        `;

    const connection = createPool();

    const ids = await pgQuery<{
        id: number,
        recipe_week_id: number,
        day_date: Date,
        recipe_id: number,
        user_id: number
    }>(connection, selectIds, [Number(req.params.userid)]);

    if (!ids?.rowCount || ids.rowCount <= 0) {
        res.status(204).json({});
        return
    }

    const queryRecipeIds: number[] = [];
    const queryIngredientIds: number[] = [];

    ids.rows.forEach((id) => {
        const recipeIdFindIndex = queryRecipeIds.findIndex((el) => el === id.recipe_id);
        const ingredientIdFindIndex = queryIngredientIds.findIndex((el) => el === id.recipe_week_id);

        if (recipeIdFindIndex < 0) {
            queryRecipeIds.push(id.recipe_id);
        }

        if (ingredientIdFindIndex < 0) {
            queryIngredientIds.push(id.recipe_week_id);
        }

    });

    const recipes: GetAllRecipeDBO[] = [];
    const ingredients: TIngredientWithRecipeId[] = [];

    const recipePromise = queryRecipeIds.map(async (id) => {
        const recipe = await pgQuery<GetAllRecipeDBO>(connection, selectRecipe, [id]);
        if (!recipe?.rowCount || recipe.rowCount < 0) return;
        recipes.push(recipe.rows[0]);
    });

    const ingredientPromise = queryIngredientIds.map(async (id) => {
        const ingredient = await pgQuery<TIngredientWithRecipeId>(connection, selectIngredient, [id]);
        if (!ingredient?.rowCount || ingredient.rowCount < 0) return;
        ingredients.push(ingredient.rows[0]);
    });

    await Promise.all(recipePromise);
    await Promise.all(ingredientPromise);

    const returnValue: {
        date: Date,
        recipe: TShoppingListRecipeDTO
    }[] = [];

    ids.rows.forEach((elem) => {
        const recipe = recipes.find((rs) => rs.id === elem.recipe_id);
        if (!recipe) return;

        const idts = ingredients.filter((elem) => elem.recipe_id === elem.recipe_id);

        returnValue.push({
            date: elem.day_date,
            recipe: {
                id: recipe.id,
                name: recipe.name,
                protein: recipe.protein,
                portion: recipe.portion,
                picture: recipe.picture,
                isOwn: recipe.is_own,
                isFavorite: recipe.is_favorite,
                fat: recipe.fat,
                duration: recipe.duration,
                carbohydrates: recipe.carbohydrates,
                description: recipe.description,
                difficultyName: recipe.difficulty_name,
                calorificValue: recipe.calorific_value,
                ingredients: idts.map((elem) => ({
                    id: elem.id,
                    quantity: elem.quantity,
                    name: elem.name,
                    quantityUnitName: elem.quantity_unit_name,
                    quantityUnitId: elem.quantity_unit_id,
                    isChecked: elem.is_checked
                } as TShoppingListIngredients))
            } as TShoppingListRecipeDTO
        })
    })

    res.status(200).json({
        data: returnValue
    });
})

router.post('/:userid/favorite', async (req, res) => {
    const query = 'UPDATE user_2_recipe SET is_favorite = $1 WHERE user_id = $2 and recipe_id = $3 RETURNING *';
    const createUser2Receipt = 'INSERT INTO user_2_recipe (user_id, recipe_id, is_favorite, is_own) VALUES ($1, $2, $3, $4) RETURNING *';

    if (!req.body?.id || req.body?.isFavorite === undefined || req.body?.isFavorite === null) {
        res.status(400).json({});
        return;
    }

    await recipeRandomise(Number(req.params.userid));

    const connection = await createPool();
    const response = await pgQuery(connection, query, [req.body.isFavorite, req.body.id, req.params.userid]);

    if (!response?.rowCount || response.rowCount <= 0) {
        const create = await pgQuery(connection, createUser2Receipt, [req.params.userid, req.body.id, req.body.isFavorite, false]);
        await disconnectPool(connection);

        res.status(204).json({
            data: create?.rows[0]
        });
        return;
    }


    await disconnectPool(connection);

    res.status(204).json({
        data: response?.rows[0]
    });
})

router.patch('/:userid/shopping/list', async (req, res) => {
    if (!req.body?.id || !req.body.isChecked) { // check body
        res.status(400).json({});
        return;
    }

    const updateRecipeWeekDayShoppingList = "UPDATE recipe_week_day_shopping_list SET is_checked = $2 WHERE id = $1"

    const connection = await createPool();
    await pgQuery(connection, updateRecipeWeekDayShoppingList, [req.body.id, req.body.isChecked]);
    await disconnectPool(connection);

    res.status(204).json({});
});

export default router;
