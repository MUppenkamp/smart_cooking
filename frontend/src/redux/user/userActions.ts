import { createAsyncThunk } from '@reduxjs/toolkit';
import { postUser } from "../../api/POST/postUser";
import { patchUser } from "../../api/PATCH/patchUser";

export const fetchUser = createAsyncThunk(
    'fetchUser',
    async (
        data: LoginData | RegisterData,
        { rejectWithValue }
    ) => {
        try {
            const retval = await postUser(data);
            if (retval && retval.status === 200) {
                return retval.data;
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
        data: any,
        { rejectWithValue }
    ) => {
        try {
            const retval = await patchUser(data);
            if (retval && retval.status === 200) {
                return retval.data;
            }
        } catch (e) {
            return rejectWithValue(null);
        }

        return rejectWithValue(null);
    }
);
