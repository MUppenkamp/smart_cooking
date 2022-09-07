import express from 'express'
import { createPool, disconnectPool, pgQuery } from '../helper/pgQuery';
import type { TIngredients, TRecipeDTO } from '../types/DTO/Recipe';
import type { GetAllRecipeDBO, TIngredientsDBO } from '../types/DBO/Recipe';
import { recipeRandomise } from '../helper/recipeRandomise';

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

router.post('/:userid/favorite', async (req, res) => {
    const query = 'UPDATE user_2_recipe SET is_favorite = $1 WHERE user_id = $2';

    console.log(req.body);

    if (!req.body?.id || req.body?.isFavorite === undefined || req.body?.isFavorite === null) {
        res.status(400).json({});
        return;
    }

    await recipeRandomise(Number(req.params.userid));

    const connection = await createPool();
    await pgQuery(connection, query, [req.body.isFavorite, req.body.id]);
    await disconnectPool(connection);

    res.status(204).json({});
});

export default router;
