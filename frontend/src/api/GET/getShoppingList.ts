import requestHelper from "../../utils/requestHelper";
import { SMART_COOKING_URL } from "../../constants/url";
import { TGetShoppingListParams } from "../../types/getShoppingList";
import { TRecipe } from "../../types/recipe";

export const getShoppingList = async (params: TGetShoppingListParams) => {
    return requestHelper<TRecipe>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'GET'
        }
    });
};
