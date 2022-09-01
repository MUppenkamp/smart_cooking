import { TRecipe } from "./recipe";

export type TPostRecipeParams = {};

export type TPostRecipeReturns = {
    status: number;
    data: TRecipe;
};

export type TPostCalendarRecipeParams = {};

export type TPostCalendarRecipeReturns = {
    status: number;
    data: Array<TRecipe>;
};
