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
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(fetchShoppingList.fulfilled, (draft, { payload }) => {
            draft.data = {
                ...draft.data,
                payload
            };
            draft.fetchState = FetchState.FETCHED;
        });

        builder.addCase(checkShoppingListItems.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(checkShoppingListItems.fulfilled, (draft, { payload }) => {
            draft.data = {
                ...draft.data,
                payload
            };
            draft.fetchState = FetchState.FETCHED;
        });
    }
});

export default shoppingListSlice.reducer;
