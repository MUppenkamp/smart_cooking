import type { RootState } from '../store';

export const selectRecipesFetchState = (state: RootState) => state.recipes.fetchState;

export const selectRecipesIds = (state: RootState) => state.recipes.data.ids;

export const selectRecipes = (state: RootState) => state.recipes.data.entities;

