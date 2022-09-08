import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFavoriteRecipes } from '../../api/GET/getRecipes';
import { postFavoriteRecipe } from '../../api/POST/postRecipe';
import { TPostFavoriteRecipeParams } from '../../types/postRecipe';

export const fetchFavoriteRecipes = createAsyncThunk(
    'fetchFavoriteRecipes',
    async (
        userId: number,
        { rejectWithValue }
    ) => {
        try {
            const retVal = await getFavoriteRecipes(userId);
            if (retVal && retVal.data) {
                return retVal.data;
            }
        } catch (e) {
        }

        return rejectWithValue(null);
    }
);

export const updateFavorite = createAsyncThunk(
    'updateFavorite',
    async (
        params: TPostFavoriteRecipeParams,
        { rejectWithValue }
    ) => {
        try {
            const retVal = await postFavoriteRecipe(params);
            console.log('updateFavorite', retVal);
            if (retVal && retVal.status === 204) {
                return retVal.data;
            }
        } catch (e) {
        }

        return rejectWithValue(null);
    }
);
