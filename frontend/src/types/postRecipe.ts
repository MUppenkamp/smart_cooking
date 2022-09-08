import { TRecipeWeek } from './recipe';

export type TPostFavoriteRecipeParams = {
    userId: number,
    body: {
        id: number,
        isFavorite: boolean
    }
};

export type TPostCalendarRecipeParams = {};

export type TPostCalendarRecipeReturns = {
    status: number;
    data: TRecipeWeek;
};
