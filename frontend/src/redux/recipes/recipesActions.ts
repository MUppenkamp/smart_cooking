import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
    'fetchRecipes',
    async (
        {},
        { rejectWithValue }
    ) => {
        try {
            const retval = await getAllRecipes();
            if (retval && retval.status === 200) {
                return retval.data;
            }
        } catch (e) {
            return rejectWithValue(null);
        }

        return rejectWithValue(null);
    }
);
