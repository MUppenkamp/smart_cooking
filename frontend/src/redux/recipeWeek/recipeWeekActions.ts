import { createAsyncThunk } from '@reduxjs/toolkit';
import { postCalendarRecipes } from '../../api/POST/postRecipe';
import { getCalendarRecipes } from '../../api/GET/getRecipes';

export const fetchCalendarRecipes = createAsyncThunk(
    'fetchCalendarRecipes',
    async (
        userId: number,
        { rejectWithValue }
    ) => {
        try {
            const retVal = await getCalendarRecipes(userId);
            if (retVal && retVal.status === 200) {
                return retVal.data;
            }
        } catch (e) {
        }

        return rejectWithValue(null);
    }
);

export const randomizeCalendarRecipes = createAsyncThunk(
    'randomizeCalendarRecipes',
    async (
        arg,
        { rejectWithValue }
    ) => {
        try {
            const retVal = await postCalendarRecipes({});
            if (retVal && retVal.status === 200) {
                return retVal.data;
            }
        } catch (e) {
        }

        return rejectWithValue(null);
    }
);
