import {
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit';
import { TRecipe } from '../../types/recipe';
import FetchState from '../../constants/fetchState';
import {
    fetchFavouriteRecipes,
    updateFavourite
} from './favoriteRecipesActions';

const recipesAdapter = createEntityAdapter<TRecipe>();

const initialState = {
    fetchState: FetchState.INITIAL,
    data: recipesAdapter.getInitialState(),
};

const favoriteRecipesSlice = createSlice({
    name: 'favoriteRecipesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFavouriteRecipes.pending, (state) => {
            return {
                ...state,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(fetchFavouriteRecipes.fulfilled, (state, { payload }) => {
            if (!payload) return;

            recipesAdapter.addMany(state.data, payload);

            return {
                ...state,
                fetchState: FetchState.FETCHED
            };
        });

        builder.addCase(updateFavourite.pending, (state) => {
            return {
                ...state,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(updateFavourite.fulfilled, (state, { payload }) => {
            if (!payload) return;

            recipesAdapter.updateOne(state.data, {
                id: payload.id,
                changes: payload
            });

            return {
                ...state,
                fetchState: FetchState.FETCHED
            }
        });
    }
});

export default favoriteRecipesSlice.reducer;
