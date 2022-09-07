import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { createRecipe, fetchRecipes, updateRecipe } from './recipesActions';
import { TRecipe } from '../../types/recipe';
import FetchState from '../../constants/fetchState';

const recipesAdapter = createEntityAdapter<TRecipe>({
    selectId: (model) => model.id
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
            return {
                ...draft,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(fetchRecipes.fulfilled, (draft, { payload }) => {
            console.log('fetchRecipes', payload);
            if (!payload) return draft;

            recipesAdapter.addMany(draft.data, payload);
            draft.fetchState = FetchState.FETCHED;
        });

        builder.addCase(createRecipe.pending, (draft) => {
            return {
                ...draft,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(createRecipe.fulfilled, (draft, { payload }) => {
            if (!payload) return;

            recipesAdapter.addOne(draft.data, payload);
            draft.fetchState = FetchState.FETCHED;
        });

        builder.addCase(updateRecipe.pending, (draft) => {
            return {
                ...draft,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(updateRecipe.fulfilled, (draft, {payload }) => {
            if (!payload) return;

            recipesAdapter.updateOne(draft.data, {
                id: payload.id,
                changes: payload
            });
            draft.fetchState = FetchState.FETCHED;
        });
    }
});

export default recipesSlice.reducer;
