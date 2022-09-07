import type { RootState } from '../store';
import { TUser } from "../../types/user";

export const selectUserFetchState = (state: RootState) => state.user.fetchState;

export const selectUser = (state: RootState): TUser | null => state.user.data;
