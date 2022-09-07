import { TRecipeWeek } from './recipe';

export type TPostFavouriteRecipeParams = { id: number, isFavorite: boolean };

export type TPostCalendarRecipeParams = {};

export type TPostCalendarRecipeReturns = {
    status: number;
    data: TRecipeWeek;
};
