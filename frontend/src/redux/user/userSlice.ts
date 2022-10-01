import { createSlice } from '@reduxjs/toolkit';
import { fetchLoginUser, fetchRegisterUser, updateUser } from './userActions';
import FetchState from '../../constants/fetchState';
import { TUser } from '../../types/user';
import { saveLocalStorage } from '../../utils/localstorageHelper';
import { USER_DATA_KEY } from '../../constants/localstorage';

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
    reducers: {
        setUser: (draft, { payload }) => {
            draft.data = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLoginUser.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(fetchLoginUser.fulfilled, (draft, { payload }) => {
            draft.data = payload;
            saveLocalStorage(USER_DATA_KEY, payload);
        });

        builder.addCase(fetchRegisterUser.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        })
        builder.addCase(fetchRegisterUser.fulfilled, (draft, { payload }) => {
            draft.data = payload;
            saveLocalStorage(USER_DATA_KEY, payload);
        })

        builder.addCase(updateUser.pending, (draft) => {
            draft.fetchState = FetchState.PENDING;
        });
        builder.addCase(updateUser.fulfilled, (draft, { payload }) => {
            draft.fetchState = FetchState.FETCHED;
            draft.data = payload;
        });
    }
});

export const {
    setUser
} = userSlice.actions;

export default userSlice.reducer;
