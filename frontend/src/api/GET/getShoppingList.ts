import requestHelper from '../../utils/requestHelper';
import { SMART_COOKING_URL } from '../../constants/url';
import { TRecipe } from '../../types/recipe';

export const getShoppingList = async (userId: number) => {
    return requestHelper<TRecipe>({
        requestUrl: `${SMART_COOKING_URL}/recipe/${userId}/shopping/list`,
        options: {
            method: 'GET'
        }
    });
};
