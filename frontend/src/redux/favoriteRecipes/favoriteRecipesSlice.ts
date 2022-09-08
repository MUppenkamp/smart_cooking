import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { TRecipe } from '../../types/recipe';
import FetchState from '../../constants/fetchState';
import { fetchFavoriteRecipes, updateFavorite } from './favoriteRecipesActions';

export const favoriteRecipesAdapter = createEntityAdapter<TRecipe>();

const initialState = {
    fetchState: FetchState.INITIAL,
    data: favoriteRecipesAdapter.getInitialState(),
};

const favoriteRecipesSlice = createSlice({
    name: 'favoriteRecipesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFavoriteRecipes.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(fetchFavoriteRecipes.fulfilled, (draft, {payload}) => {
            if (!payload) return;

            favoriteRecipesAdapter.addMany(draft.data, payload);
            draft.fetchState = FetchState.FETCHED;
        });

        builder.addCase(updateFavorite.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(updateFavorite.fulfilled, (draft, {payload}) => {
            if (!payload) return;

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

export default favoriteRecipesSlice.reducer;
