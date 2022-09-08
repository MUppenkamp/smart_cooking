import requestHelper from '../../utils/requestHelper';
import { SMART_COOKING_URL } from '../../constants/url';
import { TUpdateUser, TUser } from '../../types/user';

// ToDo: Update options
export const patchUser = async (user: TUpdateUser) => {

    const response = await requestHelper<TUser>({
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
        data: {
            id: 2,
            firstName: 'Test',
            lastName: 'Walfort',
            mail: 'jana.walort@gmail.com',
            password: '1234',
            picture: ''
        }
    };
};
