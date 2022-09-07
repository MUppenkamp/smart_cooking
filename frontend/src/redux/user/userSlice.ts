import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, updateUser } from './userActions';
import FetchState from '../../constants/fetchState';

const initialState = {
    data: {},
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
            draft.fetchState = FetchState.FETCHED;
            draft.data = {
                ...draft.data,
                ...payload
            };
        });

        builder.addCase(updateUser.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(updateUser.fulfilled, (draft, { payload }) => {
            draft.fetchState = FetchState.FETCHED;
            draft.data = {
                ...draft.data,
                ...payload
            };
        });
    }
});

export default userSlice.reducer;
