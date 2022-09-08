import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../api/POST/postUser';
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
);

export const fetchRegisterUser = createAsyncThunk(
    'registerUser',
    async (
        data: TRegisterData,
        { rejectWithValue }
    ) => {
        try {
            const retVal = await registerUser(data);
            if (retVal?.status && retVal.status === 200) {
                return retVal.data;
            }
        } catch (e) {
            return rejectWithValue(null);
        }

        return rejectWithValue(null);
    }
)

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
