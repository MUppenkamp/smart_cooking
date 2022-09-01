import type { RootState } from '../store';

export const selectRecipeWeekFetchState = (state: RootState) => state.recipesWeek.fetchState;

export const selectRecipeWeekIds = (state: RootState) => state.recipesWeek.data.ids;

export const selectRecipeWeekEntities = (state: RootState) => state.recipesWeek.data.entities;

export const selectRecipeWeekDay = (state: RootState, date: string) => state.recipesWeek.data.entities[date];
