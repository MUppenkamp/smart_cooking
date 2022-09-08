import requestHelper from '../../utils/requestHelper';
import { SMART_COOKING_URL } from '../../constants/url';
import { TShoppingList } from '../../types/shoppingList';

export const getShoppingList = async (userId: number) => {
    return requestHelper<TShoppingList>({
        requestUrl: `${SMART_COOKING_URL}/recipe/${userId}/shopping/list`,
        options: {
            method: 'GET'
        }
    });
};
