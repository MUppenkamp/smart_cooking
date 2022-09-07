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
        builder.addCase(fetchUser.pending, (state) => {
            return {
                ...state,
                fetchState: FetchState.PENDING,
            };
        });
        builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
            return {
                fetchState: FetchState.FETCHED,
                data: {
                    ...state.data,
                    payload
                }
            };
        });

        builder.addCase(updateUser.pending, (state) => {
            return {
                ...state,
                fetchState: FetchState.PENDING,
            };
        });
        builder.addCase(updateUser.fulfilled, (state, { payload }) => {
            return {
                fetchState: FetchState.FETCHED,
                data: {
                    ...state.data,
                    payload
                }
            };
        })
    }
});

export default userSlice.reducer;
