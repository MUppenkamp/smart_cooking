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
            const retval = await getFavoriteRecipes(userId);
            if (retval && retval.data) {
                return retval.data;
            }
        } catch (e) {}

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
            const retval = await postFavoriteRecipe(params);
            if (retval && retval.status === 200) {
                return retval.data;
            }
        } catch (e) {}

        return rejectWithValue(null);
    }
);
