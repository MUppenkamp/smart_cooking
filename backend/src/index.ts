import express from 'express';
import cors from 'cors';
const app = express();

import { pgQuery, disconnectPool, createPool } from './helper/pgQuery';
import recipe from './router/recipe'
import user from './router/user';
import { recipeRandomise } from './helper/recipeRandomise';
import { Pool } from 'pg';

app.use(cors());

app.use(express.json())

app.use('/recipe', recipe);
app.use('/user', user);

// region CreateDatabaseTable

const createUserTable = "CREATE TABLE IF NOT EXISTS app_user(id serial primary key, first_name varchar, last_name varchar, password varchar, mail varchar, picture varchar)";
const createRecipeWeekTable = "CREATE TABLE IF NOT EXISTS recipe_week (id serial primary key, user_id integer references app_user(id), start_date date, end_date date)";
const createDifficultyTable = "CREATE TABLE IF NOT EXISTS difficulty (id serial primary key, name varchar, icon varchar)";

const createRecipeTable = "CREATE TABLE IF NOT EXISTS recipe (id serial primary key, name varchar, duration integer, difficulty_id integer references difficulty(id), description varchar, calorific_value integer, protein integer, fat integer, carbohydrates integer, portion integer, picture varchar)";
const createUser2RecipeTable = "CREATE TABLE IF NOT EXISTS user_2_recipe (user_id integer references app_user(id), recipe_id integer references recipe(id), is_favorite boolean, is_own boolean)";
const createRecipeWeekDayTable = "CREATE TABLE IF NOT EXISTS recipe_week_day (id serial primary key, recipe_week_id integer references recipe_week(id), day_date date, recipe_id integer references recipe(id))";
const createQuantityUnitTable = "CREATE TABLE IF NOT EXISTS quantity_unit (id serial primary key, name varchar)";
const createRecipeIngredientTable = "CREATE TABLE IF NOT EXISTS recipe_ingredient (id serial primary key, recipe_id integer references recipe(id), name varchar, quantity integer, quantity_unit_id integer references quantity_unit(id))";
const createRecipeWeekDayShoppingList = "CREATE TABLE IF NOT EXISTS recipe_week_day_shopping_list (id serial primary key, is_checked boolean, recipe_week_day_id integer references recipe_week_day(id), recipe_ingredient integer references recipe_ingredient(id))";

// endregion

// region CreateDefaultData
// ToDo: change location

const createUser = "INSERT INTO app_user(first_name, last_name, password, mail) VALUES ($1, $2, $3, $4) RETURNING id";
const createDifficulty = "INSERT INTO difficulty(name) values ($1)";
const createReceipt = "INSERT INTO recipe(name, duration, difficulty_id, description, calorific_value, protein, fat, carbohydrates, portion, picture) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id"
const createUser2Receipt = "INSERT INTO user_2_recipe (user_id, recipe_id, is_favorite, is_own) VALUES ($1, $2, $3, $4)";
const createQuantityUnit = "INSERT INTO quantity_unit(name) VALUES ($1)";
const createQuantityIngredient = "INSERT INTO recipe_ingredient (recipe_id, name, quantity, quantity_unit_id) VALUES ($1, $2, $3, $4)";


// endregion

const createData = async (
    pool2: Pool,
    userName: string,
    userLastName: string,
    userEmail: string,
    recipeName: string,
    recipeDescription: string,
    ingredient: {
        name: string,
        quantity: number
    }[]
) => {
    const user = await pgQuery<{ id: number }>(pool2, createUser, [userName, userLastName, userName, userEmail]);
    await pgQuery(pool2, createDifficulty, ['Einfach']);
    await pgQuery(pool2, createDifficulty, ['Normal']);
    await pgQuery(pool2, createDifficulty, ['Schwer']);
    if (!user?.rowCount) return;

    const recipe = await pgQuery<{ id: number }>(pool2, createReceipt, [recipeName, 20, 1, recipeDescription, 10, 10, 10, 10, 10, 'https://www.gutekueche.at/storage/media/recipe/113180/conv/nudeln-in-tomatensauce-default.jpg']);
    if (!recipe?.rowCount) return;

    const userId = Number(user.rows[0].id);
    const recipeId = Number(recipe.rows[0].id);
    await pgQuery(pool2, createUser2Receipt, [userId, recipeId, true, true]);
    ingredient.forEach((id) => {
        pgQuery(pool2, createQuantityUnit, ['Gramm']);
        pgQuery(pool2, createQuantityIngredient, [recipeId, id.name, id.quantity, 1]);
    })
}

const createInitData = async () => {
    const pool = createPool();

    await pgQuery(pool, createUserTable);
    await pgQuery(pool, createRecipeWeekTable);
    await pgQuery(pool, createDifficultyTable);
    await pgQuery(pool, createRecipeTable);
    await pgQuery(pool, createUser2RecipeTable);
    await pgQuery(pool, createRecipeWeekDayTable);
    await pgQuery(pool, createQuantityUnitTable);
    await pgQuery(pool, createRecipeIngredientTable);
    await pgQuery(pool, createRecipeWeekDayShoppingList);

    console.log("created table");

    await disconnectPool(pool);
    setTimeout(async () => {
        console.log("create user");
        const pool2 = createPool();
        await createData(pool2, 'Noah', 'Dahlhaus', 'noah@dahlhaus-online.de', 'Nudeln', 'Nudeln mit Nudeln', [{name: 'Nudeln', quantity: 500}]);
        await createData(pool2, 'Test', 'Test', 'test@test.de', 'Pizza Salami', 'Pizza', [{name: 'Mehl', quantity: 500}]);
        await createData(pool2, 'Test2', 'Test2', 'Test2@Test2.de', 'Pizza Test', 'Pizza', [{name: 'Nudeln', quantity: 500}]);
        await createData(pool2, 'Test3', 'Test3', 'Test3@Test3-online.de', 'Bier', 'Bier', [{name: 'Test', quantity: 500}]);
        await createData(pool2, 'Test4', 'Test4', 'Test4@Test4-online.de', 'Hunger', 'Hunger', [{name: 'Hunger', quantity: 5}]);
        await createData(pool2, 'Test5', 'Test5', 'Test5@Test5-online.de', 'Pils', 'Lecker', [{name: 'Hopfen', quantity: 500}, {name: 'Mals', quantity: 500}]);
        await createData(pool2, 'Test6', 'Test6', 'Test6@Test6-online.de', 'Burger', 'Mit Bier', [{name: 'Brot', quantity: 500}]);
        await createData(pool2, 'Test7', 'Test7', 'Test7@Test7-online.de', 'Hallo', 'Welt', [{name: 'Welt', quantity: 500}]);
        await createData(pool2, 'Test8', 'Test8', 'Test8@Test8-online.de', 'Burger 2', 'Test', [{name: 'Bla', quantity: 500}]);
        await createData(pool2, 'Test9', 'Test9', 'Test9@Test9-online.de', 'Nudeln 3', 'Nudeln mit Nudeln', [{name: 'Nudeln', quantity: 500}]);
        await createData(pool2, 'Test10', 'Test10', 'Test10@Test10-online.de', 'Nudeln 4', 'Nudeln mit Nudeln', [{name: 'Nudeln', quantity: 500}]);
        await disconnectPool(pool2);
    }, 1000);

}

try {
    setTimeout(() => {
        // void createInitData();
    }, 20000)


    /*
    setTimeout(() => {
        console.log("start random")
        try {
            void recipeRandomise(1).catch((e) => console.log(e));
        } catch (ex) {
            console.log("error------------------------------")
            console.log(ex);
        }
    }, 5); // 20000 * 2

     */
} catch (e) {
    console.log("index", e);
}

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
