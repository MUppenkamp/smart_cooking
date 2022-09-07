import type { RootState } from '../store';

export const selectUserFetchState = (state: RootState) => state.user.fetchState;

export const selectUser = (state: RootState) => state.user.data;
