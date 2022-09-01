import express from 'express'
import { createPool, pgQuery } from '../helper/pgQuery';
import { TIngredients, TRecipeDTO } from '../types/DTO/Recipe';
import { GetAllRecipeDBO, TIngredientsDBO, TRecipeDBO } from '../types/DBO/Recipe';

const router = express.Router();


router.get('/', async (req: any, res: any) => {
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
        d.name as difficulty_name,
        d.id as difficulty_id,
        u2c.is_favorite,
        u2c.is_own
        from recipe as r
        LEFT JOIN difficulty as d ON d.id = r.difficulty_id
        LEFT JOIN user_2_recipe as u2c ON u2c.recipe_id = r.id`;
    const connection = createPool();
    const result = await pgQuery<GetAllRecipeDBO>(connection, getRecipe);


    if (!result?.rowCount || result?.rowCount <= 0) {
        res.status(404).json({});
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

    await Promise.all(promises);

    res.status(200).json({
        data: dataArray
    })
})

export default router;
