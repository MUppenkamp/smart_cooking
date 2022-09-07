import { createSlice } from '@reduxjs/toolkit';
import FetchState from '../../constants/fetchState';
import {
    checkShoppingListItems,
    fetchShoppingList
} from './shoppingListActions';

const initialState = {
    data: {},
    fetchState: FetchState.INITIAL
};

const shoppingListSlice = createSlice({
    name: 'shoppingListSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchShoppingList.pending, (draft) => {
            return {
                ...draft,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(fetchShoppingList.fulfilled, (draft, { payload }) => {
            return {
                fetchState: FetchState.FETCHED,
                data: {
                    ...draft.data,
                    payload
                }
            };
        });

        builder.addCase(checkShoppingListItems.pending, (draft) => {
            return {
                ...draft,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(checkShoppingListItems.fulfilled, (draft, { payload }) => {
            return {
                fetchState: FetchState.FETCHED,
                data: {
                    ...draft.data,
                    payload
                }
            };
        });
    }
});

export default shoppingListSlice.reducer;
