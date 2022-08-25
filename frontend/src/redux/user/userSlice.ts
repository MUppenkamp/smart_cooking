import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userActions";
import FetchState from "../../constants/fetchState";

const initialState = {
    data: {},
    fetchState: FetchState.INITIAL
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
            return {
                fetchState: FetchState.FETCHED,
                data: {
                    ...state.data
                }
            }
        });
    }
});

export const {} = userSlice.actions;

export default userSlice.reducer;
