import requestHelper from '../../utils/requestHelper';
import { SMART_COOKING_URL } from '../../constants/url';
import { TUser } from '../../types/user';

// ToDo: Update options
export const patchUser = async (user: TUser) => {
    return requestHelper<TUser>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'PATCH'
        }
    });
};
