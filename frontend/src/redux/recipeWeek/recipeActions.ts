import { createAsyncThunk } from "@reduxjs/toolkit";
import { postCalendarRecipes } from "../../api/POST/postRecipe";
import { getCalendarRecipes } from "../../api/GET/getRecipes";

export const fetchCalendarRecipes = createAsyncThunk(
    'fetchCalendarRecipes',
    async (
        {  },
        { rejectWithValue }
    ) => {
        try {
            const retval = await getCalendarRecipes();
            if (retval && retval.status === 200) {
                return retval.data;
            }
        } catch (e) {}

        return rejectWithValue(null);
    }
);

export const randomizeCalendarRecipes = createAsyncThunk(
    'randomizeCalendarRecipes',
    async (
        {  },
        { rejectWithValue }
    ) => {
        try {
            const retval = await postCalendarRecipes({});
            if (retval && retval.status === 200) {
                return retval.data;
            }
        } catch (e) {}

        return rejectWithValue(null);
    }
);
