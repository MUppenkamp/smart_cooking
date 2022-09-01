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
        builder.addCase(fetchRecipes.pending, (state) => {
            return {
                ...state,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(fetchRecipes.fulfilled, (state, { payload }) => {
            if (!payload) return;

            recipesAdapter.addMany(state.data, payload);

            return {
                ...state,
                fetchState: FetchState.FETCHED
            };
        });

        builder.addCase(createRecipe.pending, (state) => {
            return {
                ...state,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(createRecipe.fulfilled, (state, { payload }) => {
            if (!payload) return;

            recipesAdapter.addOne(state.data, payload);

            return {
                ...state,
                fetchState: FetchState.FETCHED
            };
        });

        builder.addCase(updateRecipe.pending, (state) => {
            return {
                ...state,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(updateRecipe.fulfilled, (state, {payload }) => {
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

export default recipesSlice.reducer;
