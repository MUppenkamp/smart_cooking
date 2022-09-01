import requestHelper from "../../utils/requestHelper";
import { SMART_COOKING_URL } from "../../constants/url";
import { TRecipe, TRecipeWeek } from "../../types/recipe";
import { TGetRecipesParams } from "../../types/getRecipes";

export const getAllRecipes = async (params: TGetRecipesParams) => {
    return requestHelper<Array<TRecipe>>({
        method: 'GET',
        requestUrl: `${SMART_COOKING_URL}/`
    });
};

export const getFavouriteRecipes = async (params: TGetRecipesParams) => {
    return requestHelper<Array<TRecipe>>({
        method: 'GET',
        requestUrl: `${SMART_COOKING_URL}/`
    });
};

export const getCalendarRecipes = async (params: TGetRecipesParams) => {
    return requestHelper<TRecipeWeek>({
        method: 'GET',
        requestUrl: `${SMART_COOKING_URL}/`
    });
};
