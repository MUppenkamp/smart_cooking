import requestHelper from "../../utils/requestHelper";
import { SMART_COOKING_URL } from "../../constants/url";
import { TUser } from "../../types/user";

export const patchUser = async (user: TUser) => {
    return requestHelper<TUser>({
        method: 'PATCH',
        requestUrl: `${SMART_COOKING_URL}/`
    });
};
