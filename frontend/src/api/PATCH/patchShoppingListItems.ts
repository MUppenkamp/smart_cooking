import requestHelper from '../../utils/requestHelper';
import { SMART_COOKING_URL } from '../../constants/url';
import { TRecipe } from '../../types/recipe';
import { TPatchShoppingListItemsParams } from '../../types/patchShoppingList';

export const patchShoppingListItems = async ({ userId, body }: TPatchShoppingListItemsParams) => {
    return requestHelper<TRecipe>({
        requestUrl: `${SMART_COOKING_URL}/recipe/${userId}/shopping/list`,
        options: {
            method: 'PATCH',
            body
        }
    });
};
