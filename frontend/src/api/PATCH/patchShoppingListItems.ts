import requestHelper from "../../utils/requestHelper";
import { SMART_COOKING_URL } from "../../constants/url";
import { TRecipe } from "../../types/recipe";
import { TPatchShoppingListItemsParams } from "../../types/patchShoppingList";

export const patchShoppingListItems = async (params: TPatchShoppingListItemsParams) => {
    return requestHelper<TRecipe>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'PATCH'
        }
    });
};
