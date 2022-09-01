import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllRecipes,
    getFavouriteRecipes
} from "../../api/GET/getRecipes";
import { postFavouriteRecipe,
    postRecipe
} from "../../api/POST/postRecipe";

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

export const fetchFavouriteRecipes = createAsyncThunk(
    'fetchFavouriteRecipes',
    async (
        {  },
        { rejectWithValue }
    ) => {
        try {
            const retval = await getFavouriteRecipes();
            if (retval && retval.data) {
                return retval.data;
            }
        } catch (e) {}

        return rejectWithValue(null);
    }
);

export const markAsFavourite = createAsyncThunk(
    'markAsFavourite',
    async (
        {},
        { rejectWithValue }
    ) => {
        try {
            const retval = await postFavouriteRecipe({});
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
        {  },
        { rejectWithValue }
    ) => {
        try {
            const retval = await postRecipe({});
            if (retval && retval.status === 200) {
                return retval.data;
            }
        } catch (e) {}

        return rejectWithValue(null);
    }
);
