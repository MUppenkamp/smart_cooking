import requestHelper from '../../utils/requestHelper';
import { SMART_COOKING_URL } from '../../constants/url';
import { TLoginData, TRegisterData, TUser } from '../../types/user';
import { THelper } from '../../types/requestHelper';

export const loginUser = async (data: TLoginData): Promise<THelper<TUser> | null> => {
    const response = await requestHelper<TUser>({
        requestUrl: `${SMART_COOKING_URL}/user/login`,
        options: {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });

    if (response.status === 200) {
        return response;
    }

    return null;
};

export const registerUser = async (data: TRegisterData): Promise<THelper<TUser> | null> => {
    const response = await requestHelper<TUser>({
        requestUrl: `${SMART_COOKING_URL}/user/register`,
        options: {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });

    if (response.status === 200) {
        return response;
    }

    return null;
}
