import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import FetchState from "../../constants/fetchState";
import {
    fetchCalendarRecipes,
    randomizeCalendarRecipes
} from "./recipeWeekActions";
import { TRecipeWeekDay } from "../../types/recipe";

const recipeWeekAdapter = createEntityAdapter<TRecipeWeekDay>({
    selectId: (model) => model.date
});

const initialState = {
    fetchState: FetchState.INITIAL,
    data: recipeWeekAdapter.getInitialState()
};

const recipeWeekSlice = createSlice({
    name: 'recipeWeekSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCalendarRecipes.pending, (state) => {
            return {
                ...state,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(fetchCalendarRecipes.fulfilled, (state, { payload }) => {
            recipeWeekAdapter.addMany(state.data, payload);

            return {
                ...state,
                fetchState: FetchState.FETCHED
            };
        });

        builder.addCase(randomizeCalendarRecipes.pending, (state) => {
            return {
                ...state,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(randomizeCalendarRecipes.fulfilled, (state, { payload }) => {
            recipeWeekAdapter.setAll(state.data, payload);

            return {
                ...state,
                fetchState: FetchState.FETCHED
            };
        });
    }
});

export default recipeWeekSlice.reducer;
