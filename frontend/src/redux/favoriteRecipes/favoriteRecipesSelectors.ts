import type { RootState } from '../store';
import { favoriteRecipesAdapter } from "./favoriteRecipesSlice";
import { EntityId } from "@reduxjs/toolkit";

const favoriteRecipesSelector = favoriteRecipesAdapter.getSelectors((state: RootState) => state.favoriteRecipes.data);

export const selectFavoriteRecipeFetchState = (state: RootState) => state.favoriteRecipes.fetchState;

export const selectFavoriteRecipes = (state: RootState) => favoriteRecipesSelector.selectAll(state);

export const selectFavoriteRecipesIds = (state: RootState) => favoriteRecipesSelector.selectIds(state);

export const selectFavoriteRecipe = (state: RootState, id: EntityId) => favoriteRecipesSelector.selectById(state, id);
