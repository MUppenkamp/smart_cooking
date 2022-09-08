import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { createRecipe, fetchRecipes, updateRecipe } from './recipesActions';
import { TRecipe } from '../../types/recipe';
import FetchState from '../../constants/fetchState';
import { updateFavorite } from '../favoriteRecipes/favoriteRecipesActions';
import { favoriteRecipesAdapter } from '../favoriteRecipes/favoriteRecipesSlice';

export const recipesAdapter = createEntityAdapter<TRecipe>({
    sortComparer: (data) => data.id
});

const initialState = {
    fetchState: FetchState.INITIAL,
    data: recipesAdapter.getInitialState(),
};

const recipesSlice = createSlice({
    name: 'recipesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(fetchRecipes.fulfilled, (draft, { payload }) => {
            if (!payload) return draft;

            recipesAdapter.setAll(draft.data, payload);
            draft.fetchState = FetchState.FETCHED;
        });

        builder.addCase(createRecipe.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(createRecipe.fulfilled, (draft, { payload }) => {
            if (!payload) return;

            recipesAdapter.addOne(draft.data, payload);
            draft.fetchState = FetchState.FETCHED;
        });

        builder.addCase(updateRecipe.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(updateRecipe.fulfilled, (draft, { payload }) => {
            if (!payload) return;

            recipesAdapter.updateOne(draft.data, {
                id: payload.id,
                changes: payload
            });
            draft.fetchState = FetchState.FETCHED;
        });

        builder.addCase(updateFavorite.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(updateFavorite.fulfilled, (draft, {payload}) => {
            if (!payload) return;

            console.log('AHHHHHH', payload);

            favoriteRecipesAdapter.updateOne(draft.data, {
                id: payload.id,
                changes: {
                    isFavorite: payload.isFavorite
                }
            });

            draft.fetchState = FetchState.FETCHED;
        });
    }
});

export default recipesSlice.reducer;
