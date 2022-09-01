import { getShoppingList } from "../../api/GET/getShoppingList";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { patchShoppingListItems } from "../../api/PATCH/patchShoppingListItems";

export const fetchShoppingList = createAsyncThunk(
    'fetchShoppingList',
    async (
        userId: number,
        { rejectWithValue }
    ) => {
        try {
            const retval = await getShoppingList(userId);
            if (retval && retval.status === 200) {
                return retval.data;
            }
        } catch (e) {}

        return rejectWithValue(null);
    }
);

export const checkShoppingListItems = createAsyncThunk(
    'checkShoppingListItems',
    async (
        {},
        { rejectWithValue }
    ) => {
        try {
            const retval = await patchShoppingListItems({});
            if (retval && retval.status === 200) {
                return retval.data;
            }
        } catch (e) {}

        return rejectWithValue(null);
    }
);
