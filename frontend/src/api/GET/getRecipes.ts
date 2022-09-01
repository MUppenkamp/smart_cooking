import requestHelper from "../../utils/requestHelper";
import { SMART_COOKING_URL } from "../../constants/url";
import { TRecipe, TRecipeWeek } from "../../types/recipe";

export const getAllRecipes = async (userId: number) => {
    return requestHelper<Array<TRecipe>>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'GET'
        }
    });
};

export const getFavouriteRecipes = async (userId: number) => {
    return requestHelper<Array<TRecipe>>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'GET'
        }
    });
};

export const getCalendarRecipes = async (userId: number) => {
    return requestHelper<TRecipeWeek>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'GET'
        }
    });
};
