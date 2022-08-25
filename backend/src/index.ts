// @ts-ignore
const express = require('express');
const cors = require('cors');
const pg = require('./helper/pgQuery.ts');
const app = express();

app.use(cors());

// region CreateDatabaseTable

const createUserTable = "CREATE TABLE IF NOT EXISTS app_user(id serial primary key, first_name varchar, last_name varchar, password varchar, mail varchar, picture varchar)";
const createRecipeWeekTable = "CREATE TABLE IF NOT EXISTS recipe_week (id serial primary key, user_id integer references app_user(id), state_data date, end_data date)";
const createDifficultyTable = "CREATE TABLE IF NOT EXISTS difficulty (id serial primary key, name varchar, icon varchar)";
const createRecipeTable = "CREATE TABLE IF NOT EXISTS recipe (id serial primary key, name varchar, duration integer, difficulty_id integer references recipe(id), description varchar, calorific_value integer, protein integer, fat integer, carbohydrates integer, portion integer)";
const createUser2RecipeTable = "CREATE TABLE IF NOT EXISTS user_2_recipe (user_id integer references app_user(id), recipe_id integer references recipe(id), is_favorite boolean, is_own boolean)";
const createRecipeWeekDayTable = "CREATE TABLE IF NOT EXISTS recipe_week_day (id serial primary key, recipe_week_id integer references recipe_week(id), day_date date, recipe_id integer references recipe(id))";
const createQuantityUnitTable = "CREATE TABLE IF NOT EXISTS quantity_unit (id serial primary key, name varchar)";
const createRecipeIngredientTable = "CREATE TABLE IF NOT EXISTS recipe_ingredient (id serial primary key, recipe_id integer references recipe(id), name varchar, quantity integer, quantity_unit_id integer references quantity_unit(id))";
const createRecipeWeekDayShoppingList = "CREATE TABLE IF NOT EXISTS recipe_week_day_shopping_list (id serial primary key, is_checked boolean, recipe_week_day_id integer references recipe_week_day(id), recipe_ingredient integer references recipe_ingredient(id))";

// endregion




const createInitData = async () => {
    const pool = pg.createPool();
    await pg.pgQuery(pool, createUserTable);
    await pg.pgQuery(pool, createRecipeWeekTable);
    await pg.pgQuery(pool, createDifficultyTable);
    await pg.pgQuery(pool, createRecipeTable);
    await pg.pgQuery(pool, createUser2RecipeTable);
    await pg.pgQuery(pool, createRecipeWeekDayTable);
    await pg.pgQuery(pool, createQuantityUnitTable);
    await pg.pgQuery(pool, createRecipeIngredientTable);
    await pg.pgQuery(pool, createRecipeWeekDayShoppingList);

    await pg.disconnectPool(pool);
}

try {
    void createInitData();
} catch (e) {
    console.log("index", e);
}

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
