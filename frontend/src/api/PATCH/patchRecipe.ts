import requestHelper from "../../utils/requestHelper";
import { SMART_COOKING_URL } from "../../constants/url";
import { TRecipe } from "../../types/recipe";
import { TPatchRecipeParams } from "../../types/patchRecipe";

export const patchRecipe = async (params: TPatchRecipeParams) => {
    return requestHelper<TRecipe>({
        method: 'PATCH',
        requestUrl: `${SMART_COOKING_URL}/`
    });
};
