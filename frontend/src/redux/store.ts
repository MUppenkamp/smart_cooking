import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { IS_PRODUCTION } from "../constants/environments";
import favouriteRecipesReducer from "./favouriteRecipes/favouriteRecipesSlice";
import recipesReducer from "./recipes/recipesSlice";
import recipesWeekReducer from "./recipeWeek/recipeWeekSlice";
import shoppingListReducer from "./shoppingList/shoppingListSlice";
import userReducer from "./user/userSlice";


const createStore = () => {
    const rootReducer = combineReducers({
        favouriteRecipes: favouriteRecipesReducer,
        user: userReducer,
        recipes: recipesReducer,
        recipesWeek: recipesWeekReducer,
        shoppingList: shoppingListReducer
    });


    return configureStore({
        reducer: rootReducer,
        devTools: !IS_PRODUCTION
    });
};

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export default store;
