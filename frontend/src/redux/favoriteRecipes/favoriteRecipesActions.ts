import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFavouriteRecipes } from '../../api/GET/getRecipes';
import { postFavouriteRecipe } from '../../api/POST/postRecipe';
import { TPostFavouriteRecipeParams } from '../../types/postRecipe';

export const fetchFavouriteRecipes = createAsyncThunk(
    'fetchFavouriteRecipes',
    async (
        userId: number,
        { rejectWithValue }
    ) => {
        try {
            const retval = await getFavouriteRecipes(userId);
            if (retval && retval.data) {
                return retval.data;
            }
        } catch (e) {}

        return rejectWithValue(null);
    }
);

export const updateFavourite = createAsyncThunk(
    'markAsFavourite',
    async (
        params: TPostFavouriteRecipeParams,
        { rejectWithValue }
    ) => {
        try {
            const retval = await postFavouriteRecipe(params);
            if (retval && retval.status === 200) {
                return retval.data;
            }
        } catch (e) {}

        return rejectWithValue(null);
    }
);
