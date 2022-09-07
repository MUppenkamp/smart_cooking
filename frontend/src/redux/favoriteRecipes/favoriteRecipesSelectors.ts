import type { RootState } from '../store';

const selectFavouriteRecipeFetchState = (state: RootState) => state.favoriteRecipes.fetchState;

const selectFavouriteRecipesIds = (state: RootState) => state.favoriteRecipes.data.ids;

const selectFavouriteRecipes = (state: RootState) => state.favoriteRecipes.data.entities;
