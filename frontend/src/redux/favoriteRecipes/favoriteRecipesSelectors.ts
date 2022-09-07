import type { RootState } from '../store';

const selectFavoriteRecipeFetchState = (state: RootState) => state.favoriteRecipes.fetchState;

const selectFavoriteRecipesIds = (state: RootState) => state.favoriteRecipes.data.ids;

const selectFavoriteRecipes = (state: RootState) => state.favoriteRecipes.data.entities;
