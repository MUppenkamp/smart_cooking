// @ts-ignore
import express from 'express';
import cors from 'cors';
const app = express();

import { pgQuery, disconnectPool, createPool } from './helper/pgQuery';
import recipe from './router/recipe';

app.use(cors());

app.use('/recipe', recipe);

// region CreateDatabaseTable

const createUserTable = "CREATE TABLE IF NOT EXISTS app_user(id serial primary key, first_name varchar, last_name varchar, password varchar, mail varchar, picture varchar)";
const createRecipeWeekTable = "CREATE TABLE IF NOT EXISTS recipe_week (id serial primary key, user_id integer references app_user(id), state_data date, end_data date)";
const createDifficultyTable = "CREATE TABLE IF NOT EXISTS difficulty (id serial primary key, name varchar, icon varchar)";

const createRecipeTable = "CREATE TABLE IF NOT EXISTS recipe (id serial primary key, name varchar, duration integer, difficulty_id integer references difficulty(id), description varchar, calorific_value integer, protein integer, fat integer, carbohydrates integer, portion integer)";
const createUser2RecipeTable = "CREATE TABLE IF NOT EXISTS user_2_recipe (user_id integer references app_user(id), recipe_id integer references recipe(id), is_favorite boolean, is_own boolean)";
const createRecipeWeekDayTable = "CREATE TABLE IF NOT EXISTS recipe_week_day (id serial primary key, recipe_week_id integer references recipe_week(id), day_date date, recipe_id integer references recipe(id))";
const createQuantityUnitTable = "CREATE TABLE IF NOT EXISTS quantity_unit (id serial primary key, name varchar)";
const createRecipeIngredientTable = "CREATE TABLE IF NOT EXISTS recipe_ingredient (id serial primary key, recipe_id integer references recipe(id), name varchar, quantity integer, quantity_unit_id integer references quantity_unit(id))";
const createRecipeWeekDayShoppingList = "CREATE TABLE IF NOT EXISTS recipe_week_day_shopping_list (id serial primary key, is_checked boolean, recipe_week_day_id integer references recipe_week_day(id), recipe_ingredient integer references recipe_ingredient(id))";

// endregion

// region CreateDefaultData
// ToDo: change location

const createUser = "INSERT INTO app_user(first_name, last_name, password, mail) VALUES ($1, $2, $3, $4)";
const createDifficulty = "INSERT INTO difficulty(name) values ($1)";
const createReceipt = "INSERT INTO recipe(name, duration, difficulty_id, description, calorific_value, protein, fat, carbohydrates, portion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
const createUser2Receipt = "INSERT INTO user_2_recipe (user_id, recipe_id, is_favorite, is_own) VALUES ($1, $2, $3, $4)";

// endregion



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
        await pgQuery(pool2, createUser, ['Noah', 'Dahlhaus', 'Noah', 'noah@dahlhaus-online.de']);
        await pgQuery(pool2, createDifficulty, ['Einfach']);
        await pgQuery(pool2, createDifficulty, ['Normal']);
        await pgQuery(pool2, createDifficulty, ['Schwer']);
        await pgQuery(pool2, createReceipt, ['Nudeln', 20, 1, 'Nudeln mit Nudeln', 10, 10, 10, 10, 10]);
        await pgQuery(pool2, createUser2Receipt, [1, 1, true, true]);

        await disconnectPool(pool2);
    }, 1000);

}

try {
    setTimeout(() => {
        // void createInitData();
    }, 20000)
} catch (e) {
    console.log("index", e);
}

app.listen(3003, () => {
    console.log("Server running on port 3003");
});
