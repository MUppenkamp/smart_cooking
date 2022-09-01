import { TRecipe, TRecipeWeek, TRecipeWeekDay } from "./recipe";

export type TGetRecipesParams = {

};

export type TGetRecipesReturns = {
    status: number;
    data: Array<TRecipe>
};

export type TGetCalendarRecipesReturns = {
    status: number;
    data: TRecipeWeek
};
