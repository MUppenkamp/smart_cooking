import requestHelper from '../../utils/requestHelper';
import { SMART_COOKING_URL } from '../../constants/url';
import { TLoginData, TRegisterData, TUser } from '../../types/user';

// ToDo: Update options
export const postUser = async (data: TLoginData | TRegisterData) => {
    const response = await requestHelper<TUser>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'POST'
        }
    });

    if (response.status === 200) {
        return response;
    }

    return {
        status: 200,
        data: {
            id: 2,
            firstName: 'Jana',
            lastName: 'Walfort',
            password: '1234',
            mail: 'jana.walfort@gmail.com',
            picture: ''
        }
    };
};
