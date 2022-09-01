import type { RootState } from "../store";

const selectFavouriteRecipeFetchState = (state: RootState) => state.favouriteRecipes.fetchState;

const selectFavouriteRecipesIds = (state: RootState) => state.favouriteRecipes.data.ids;

const selectFavouriteRecipes = (state: RootState) => state.favouriteRecipes.data.entities;
