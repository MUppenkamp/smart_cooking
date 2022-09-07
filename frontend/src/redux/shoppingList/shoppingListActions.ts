import { getShoppingList } from '../../api/GET/getShoppingList';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { patchShoppingListItems } from '../../api/PATCH/patchShoppingListItems';

export const fetchShoppingList = createAsyncThunk(
    'fetchShoppingList',
    async (
        userId: number,
        { rejectWithValue }
    ) => {
        try {
            const retVal = await getShoppingList(userId);
            if (retVal && retVal.status === 200) {
                return retVal.data;
            }
        } catch (e) {
        }

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
            const retVal = await patchShoppingListItems({});
            if (retVal && retVal.status === 200) {
                return retVal.data;
            }
        } catch (e) {
        }

        return rejectWithValue(null);
    }
);
