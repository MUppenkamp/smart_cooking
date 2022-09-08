import requestHelper from '../../utils/requestHelper';
import { SMART_COOKING_URL } from '../../constants/url';
import { TRecipe } from '../../types/recipe';

// ToDo: Do not
export const patchRecipe = async (recipe: TRecipe) => {
    const response = await requestHelper<TRecipe>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'PATCH'
        }
    });

    if (response.status === 200) {
        return response;
    }

    return {
        status: 200,
        data: recipe
    };
};
