import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { IS_PRODUCTION } from "../constants/environments";
import favouriteRecipesReducer from "./favouriteRecipes/favouriteRecipesSlice";
import recipesReducer from "./recipes/recipesSlice";
import shoppingListReducer from "./shoppingList/shoppingListSlice";
import userReducer from "./user/userSlice";


const createStore = () => {
    const rootReducer = combineReducers({
        favouriteRecipes: favouriteRecipesReducer,
        user: userReducer,
        recipes: recipesReducer,
        shoppingList: shoppingListReducer
    });


    return configureStore({
        reducer: rootReducer,
        devTools: !IS_PRODUCTION
    });
};

const store = createStore();

export default store;
