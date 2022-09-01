import { TRecipe, TRecipeWeek } from "./recipe";

export type TPostFavouriteRecipeParams = { id: number, isFavourite: boolean };

export type TPostRecipeParams = TRecipe;


export type TPostCalendarRecipeParams = {};

export type TPostCalendarRecipeReturns = {
    status: number;
    data: TRecipeWeek;
};
