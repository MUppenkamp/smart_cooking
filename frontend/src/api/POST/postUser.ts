import requestHelper from "../../utils/requestHelper";
import { SMART_COOKING_URL } from "../../constants/url";
import {
    TLoginData,
    TRegisterData,
    TUser
} from "../../types/user";

export const postUser = async (data: TLoginData | TRegisterData) => {
    return requestHelper<TUser>({
        method: 'POST',
        requestUrl: `${SMART_COOKING_URL}/`
    });
};
