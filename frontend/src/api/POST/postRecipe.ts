import requestHelper from "../../utils/requestHelper";
import { SMART_COOKING_URL } from "../../constants/url";
import {
    TPostCalendarRecipeParams,
    TPostFavouriteRecipeParams,
    TPostRecipeParams,
} from "../../types/postRecipe";
import { TRecipe, TRecipeWeek } from "../../types/recipe";

export const postFavouriteRecipe = async (params: TPostFavouriteRecipeParams) => {
    return requestHelper<TRecipe>({
        method: 'POST',
        requestUrl: `${SMART_COOKING_URL}/`
    });
};

export const postRecipe = async (params: TPostRecipeParams) => {
    return requestHelper<TRecipe>({
        method: 'POST',
        requestUrl: `${SMART_COOKING_URL}/`
    });
};

export const postCalendarRecipes = async (params: TPostCalendarRecipeParams) => {
    return requestHelper<TRecipeWeek>({
        method: 'POST',
        requestUrl: `${SMART_COOKING_URL}/`
    });
};
