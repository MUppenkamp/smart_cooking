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
        builder.addCase(fetchShoppingList.pending, (state) => {
            return {
                ...state,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(fetchShoppingList.fulfilled, (state, { payload }) => {
            return {
                fetchState: FetchState.FETCHED,
                data: {
                    ...state.data,
                    payload
                }
            };
        });

        builder.addCase(checkShoppingListItems.pending, (state) => {
            return {
                ...state,
                fetchState: FetchState.PENDING
            };
        });
        builder.addCase(checkShoppingListItems.fulfilled, (state, { payload }) => {
            return {
                fetchState: FetchState.FETCHED,
                data: {
                    ...state.data,
                    payload
                }
            };
        });
    }
});

export default shoppingListSlice.reducer;
