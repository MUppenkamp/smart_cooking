import requestHelper from '../../utils/requestHelper';
import { SMART_COOKING_URL } from '../../constants/url';
import {
    TLoginData,
    TRegisterData,
    TUser
} from '../../types/user';

// ToDo: Update options
export const postUser = async (data: TLoginData | TRegisterData) => {
    return requestHelper<TUser>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'POST'
        }
    });
};
