import { createSlice } from '@reduxjs/toolkit';
import FetchState from "../../constants/fetchState";
import {
    fetchCalendarRecipes,
    randomizeCalendarRecipes
} from "./recipeActions";

const initialState = {
    data: {},
    fetchState: FetchState.INITIAL
};

const recipeSlice = createSlice({
    name: 'recipeSlice',
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
            return {
                fetchState: FetchState.FETCHED,
                data: {
                    ...state.data,
                    payload
                }
            };
        });

        builder.addCase(randomizeCalendarRecipes.pending, (state) => {
            return {
                ...state,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(randomizeCalendarRecipes.fulfilled, (state, { payload }) => {
            return {
                fetchState: FetchState.FETCHED,
                data: {
                    ...state.data,
                    payload
                }
            };
        });
    }
});

export default recipeSlice.reducer;
