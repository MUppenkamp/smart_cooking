import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllRecipes } from "../../api/GET/getRecipes";
import { postRecipe } from "../../api/POST/postRecipe";
import { TPostRecipeParams } from "../../types/postRecipe";

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
        } catch (e) {}

        return rejectWithValue(null);
    }
);

export const createRecipe = createAsyncThunk(
    'createRecipe',
    async (
        params: TPostRecipeParams,
        { rejectWithValue }
    ) => {
        try {
            const retval = await postRecipe(params);
            if (retval && retval.status === 200) {
                return retval.data;
            }
        } catch (e) {}

        return rejectWithValue(null);
    }
);
