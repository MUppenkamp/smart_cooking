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
        builder.addCase(fetchFavouriteRecipes.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(fetchFavouriteRecipes.fulfilled, (draft, { payload }) => {
            if (!payload) return;

            recipesAdapter.addMany(draft.data, payload);
            draft.fetchState = FetchState.FETCHED;
        });

        builder.addCase(updateFavourite.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(updateFavourite.fulfilled, (draft, { payload }) => {
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
