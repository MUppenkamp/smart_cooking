import type { RootState } from '../store';
import { recipeWeekAdapter } from './recipeWeekSlice';
import { EntityId } from '@reduxjs/toolkit';

const recipeWeekSelector = recipeWeekAdapter.getSelectors((state: RootState) => state.recipeWeek.data);

export const selectRecipeWeekFetchState = (state: RootState) => state.recipeWeek.fetchState;

export const selectRecipeWeekIds = (state: RootState) => recipeWeekSelector.selectIds(state);

export const selectRecipeWeek = (state: RootState) => recipeWeekSelector.selectAll(state);

export const selectRecipeWeekDay = (state: RootState, id: EntityId) => recipeWeekSelector.selectById(state, id);
