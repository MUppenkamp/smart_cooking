import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { TRecipe } from '../../types/recipe';
import FetchState from '../../constants/fetchState';
import { fetchFavoriteRecipes, updateFavorite } from './favoriteRecipesActions';

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
        builder.addCase(fetchFavoriteRecipes.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(fetchFavoriteRecipes.fulfilled, (draft, { payload }) => {
            if (!payload) return;

            recipesAdapter.addMany(draft.data, payload);
            draft.fetchState = FetchState.FETCHED;
        });

        builder.addCase(updateFavorite.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(updateFavorite.fulfilled, (draft, { payload }) => {
            if (!payload) return;

            recipesAdapter.updateOne(draft.data, {
                id: payload.id,
                changes: payload
            });
            draft.fetchState = FetchState.FETCHED;
        });
    }
});

export default favoriteRecipesSlice.reducer;
