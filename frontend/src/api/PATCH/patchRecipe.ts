import requestHelper from "../../utils/requestHelper";
import { SMART_COOKING_URL } from "../../constants/url";
import { TRecipe } from "../../types/recipe";

export const patchRecipe = async (recipe: TRecipe) => {
    return requestHelper<TRecipe>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'PATCH'
        }
    });
};
