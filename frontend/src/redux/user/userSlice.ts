import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, updateUser } from './userActions';
import FetchState from '../../constants/fetchState';
import { TUser } from "../../types/user";

type TInitialState = {
    data: TUser | null;
    fetchState: FetchState;
};

const initialState: TInitialState = {
    data: null,
    fetchState: FetchState.INITIAL
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(fetchUser.fulfilled, (draft, { payload }) => {
            if (!payload) return;

            draft.fetchState = FetchState.FETCHED;
            draft.data = payload;
        });

        builder.addCase(updateUser.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(updateUser.fulfilled, (draft, { payload }) => {
            draft.fetchState = FetchState.FETCHED;
            draft.data = payload;
        })
    }
});

export default userSlice.reducer;
