import type { RootState } from "../store";
import { TRecipe, TRecipeWeek, TRecipeWeekDay } from "../../types/recipe";

export const selectRecipeWeekFetchState = (state: RootState) => state.recipesWeek.fetchState;

export const selectRecipeWeek = (state: RootState) => state.recipesWeek.data;

export const selectRecipeWeekDay = (state: RootState, date: string) => state.recipesWeek.data.entities[date];
