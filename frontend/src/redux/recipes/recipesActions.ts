import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllRecipes } from "../../api/GET/getRecipes";
import { postRecipe } from "../../api/POST/postRecipe";
import { patchRecipe } from "../../api/PATCH/patchRecipe";
import { TRecipe } from "../../types/recipe";

export const fetchRecipes = createAsyncThunk(
    'fetchRecipes',
    async (
        userId: number,
        { rejectWithValue }
    ) => {
        try {
            const retval = await getAllRecipes(userId);
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
        recipe: TRecipe,
        { rejectWithValue }
    ) => {
        try {
            const retval = await postRecipe(recipe);
            if (retval && retval.status === 200) {
                return retval.data;
            }
        } catch (e) {}

        return rejectWithValue(null);
    }
);
