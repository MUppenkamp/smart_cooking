import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { IS_PRODUCTION } from '../constants/environments';
import favoriteRecipesReducer from './favoriteRecipes/favoriteRecipesSlice';
import recipesReducer from './recipes/recipesSlice';
import recipeWeekReducer from './recipeWeek/recipeWeekSlice';
import shoppingListReducer from './shoppingList/shoppingListSlice';
import userReducer from './user/userSlice';


const createStore = () => {
    const rootReducer = combineReducers({
        favoriteRecipes: favoriteRecipesReducer,
        user: userReducer,
        recipes: recipesReducer,
        recipeWeek: recipeWeekReducer,
        shoppingList: shoppingListReducer
    });


    return configureStore({
        reducer: rootReducer,
        devTools: !IS_PRODUCTION
    });
};

const store = createStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
