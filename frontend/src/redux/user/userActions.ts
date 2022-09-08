import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, postUser } from '../../api/POST/postUser';
import { patchUser } from '../../api/PATCH/patchUser';
import { TLoginData, TRegisterData, TUpdateUser } from '../../types/user';

export const fetchLoginUser = createAsyncThunk(
    'loginUser',
    async (
        data: TLoginData,
           { rejectWithValue }
    ) => {
        try {
            const retVal = await loginUser(data);
            if (retVal?.status && retVal.status === 200) {
                return retVal.data;
            }
        } catch (e) {
            return rejectWithValue(null);
        }

        return rejectWithValue(null);
    }
)

export const fetchUser = createAsyncThunk(
    'fetchUser',
    async (
        data: TLoginData | TRegisterData,
        { rejectWithValue }
    ) => {
        try {
            const retVal = await postUser(data);
            if (retVal && retVal.status === 200) {
                return retVal.data;
            }
        } catch (e) {
            return rejectWithValue(null);
        }

        return rejectWithValue(null);
    }
);

export const updateUser = createAsyncThunk(
    'updateUser',
    async (
        user: TUpdateUser,
        { rejectWithValue }
    ) => {
        try {
            const retVal = await patchUser(user);
            if (retVal && retVal.status === 200) {
                return retVal.data;
            }
        } catch (e) {
            return rejectWithValue(null);
        }

        return rejectWithValue(null);
    }
);
