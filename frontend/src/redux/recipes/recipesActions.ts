import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllRecipes } from '../../api/GET/getRecipes';
import { postRecipe } from '../../api/POST/postRecipe';
import { patchRecipe } from '../../api/PATCH/patchRecipe';
import { TCreateRecipe, TRecipe } from '../../types/recipe';

export const fetchRecipes = createAsyncThunk(
    'fetchRecipes',
    async (
        userId: number,
        { rejectWithValue }
    ) => {
        try {
            const retVal = await getAllRecipes(userId);
            if (retVal && retVal.status === 200) {
                return retVal.data;
            }
        } catch (e) {
        }

        return rejectWithValue(null);
    }
);

export const createRecipe = createAsyncThunk(
    'createRecipe',
    async (
        recipe: TCreateRecipe,
        { rejectWithValue }
    ) => {
        try {
            const retVal = await postRecipe(recipe);
            if (retVal && retVal.status === 200) {
                return retVal.data;
            }
        } catch (e) {
        }

        return rejectWithValue(null);
    }
);

export const updateRecipe = createAsyncThunk(
    'updateRecipe',
    async (
        recipe: TRecipe,
        { rejectWithValue }
    ) => {
        try {
            const retVal = await patchRecipe(recipe);
            if (retVal && retVal.status === 200) {
                return retVal.data;
            }
        } catch (e) {
        }

        return rejectWithValue(null);
    }
);
