import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { isBefore } from 'date-fns';
import FetchState from '../../constants/fetchState';
import { fetchCalendarRecipes, randomizeCalendarRecipes } from './recipeWeekActions';
import { TRecipeWeekDay } from '../../types/recipe';

export const recipeWeekAdapter = createEntityAdapter<TRecipeWeekDay>({
    selectId: (model) => model.date,
    sortComparer: (a, b) => {
        if (isBefore(new Date(a.date), new Date(b.date))) {
            return -1;
        }
        return 1;
    }
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
        builder.addCase(fetchCalendarRecipes.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(fetchCalendarRecipes.fulfilled, (draft, { payload }) => {
            console.log('fetchCalendarRecipes', payload);
            if (!payload) return;

            recipeWeekAdapter.addMany(draft.data, payload);
            draft.fetchState = FetchState.FETCHED;
        });

        builder.addCase(randomizeCalendarRecipes.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(randomizeCalendarRecipes.fulfilled, (draft, { payload }) => {
            if (!payload) return;

            recipeWeekAdapter.setAll(draft.data, payload);
            draft.fetchState = FetchState.FETCHED;
        });
    }
});

export default recipeWeekSlice.reducer;
