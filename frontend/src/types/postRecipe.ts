import { TRecipe } from "./recipe";

export type TPostFavouriteRecipeParams = { id: number, isFavourite: boolean };

export type TPostRecipeParams = TRecipe;

export type TPostRecipeReturns = {
    status: number;
    data: TRecipe;
};

export type TPostCalendarRecipeParams = {};

export type TPostCalendarRecipeReturns = {
    status: number;
    data: Array<TRecipe>;
};
