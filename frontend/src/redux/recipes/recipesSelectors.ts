import type { RootState } from '../store';
import { recipesAdapter } from './recipesSlice';
import { EntityId } from '@reduxjs/toolkit';

const recipesSelector = recipesAdapter.getSelectors((state: RootState) => state.recipes.data);

export const selectRecipesFetchState = (state: RootState) => state.recipes.fetchState;

export const selectRecipesIds = (state: RootState) => recipesSelector.selectIds(state);

export const selectRecipes = (state: RootState) => recipesSelector.selectAll(state);

export const selectRecipe = (state: RootState, id: EntityId) => recipesSelector.selectById(state, id);
