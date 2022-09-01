import requestHelper from "../../utils/requestHelper";
import { SMART_COOKING_URL } from "../../constants/url";
import {
    TPostCalendarRecipeParams,
    TPostFavouriteRecipeParams,
} from "../../types/postRecipe";
import {
    TRecipe,
    TRecipeWeek
} from "../../types/recipe";

export const postFavouriteRecipe = async (params: TPostFavouriteRecipeParams) => {
    return requestHelper<TRecipe>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'POST'
        }
    });
};

export const postRecipe = async (recipe: TRecipe) => {
    return requestHelper<TRecipe>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'POST'
        }
    });
};

export const postCalendarRecipes = async (params: TPostCalendarRecipeParams) => {
    return requestHelper<TRecipeWeek>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'POST'
        }
    });
};
