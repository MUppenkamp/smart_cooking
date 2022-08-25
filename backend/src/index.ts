// @ts-ignore
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// region CreateDatabaseTable

const createUserTable = "CREATE TABLE [IF NOT EXISTS] user (id serial, first_name varchar, last_name varchar, password varchar, mail varchar, picture varchar)";
const createRecipeWeekTable = "CREATE TABLE [IF NOT EXISTS] recipe_week (id serial, user_id integer references user(id), state_data date, end_data date)";
const createDifficultyTable = "CREATE TABLE [IF NOT EXISTS] difficulty (id serial, name varchar, icon varchar)";
const createRecipeTable = "CREATE TABLE [IF NOT EXISTS] recipe (id serial, name varchar, duration integer, difficulty_id integer references recipe(id), description varchar, calorific_value integer, protein integer, fat integer, carbohydrates integer, portion integer)";
const createUser2RecipeTable = "CREATE TABLE [IF NOT EXISTS] user_2_recipe (user_id integer references user(id), recipe_id integer references recipe(id), is_favorite boolean, is_own boolean)";
const createRecipeWeekDayTable = "CREATE TABLE [IF NOT EXISTS] recipe_week_day (id serial, recipe_week_id references recipe_week(id), day_date date), recipe_id integer references recipe(id)";
const createQuantityUnitTable = "CREATE TABLE [IF NOT EXISTS] quantity_unit (id serial, name varchar)";
const createRecipeIngredientTable = "CREATE TABLE [IF NOT EXISTS] recipe_ingredient (id serial, recipe_id integer references recipe(id), name varchar, quantity integer, quantity_unit_id integer references recipe_ingredient(quantity_unit_id))";
const createRecipeWeekDayShoppingList = "CREATE TABLE [IF NOT EXISTS] recipe_week_day_shopping_list (id serial, is_checked boolean, recipe_week_day_id integer references recipe_week_day(id), recipe_ingredient integer references recipe_ingredient(id))";

// endregion




const createInitData = async () => {

}

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
