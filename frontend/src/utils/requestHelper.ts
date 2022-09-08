import { THelper, THelperParams } from '../types/requestHelper';

const requestHelper = async <T>({ requestUrl, options }: THelperParams): Promise<THelper<T>> => {
    const response = await fetch(requestUrl, options);

    if (response.status !== 200) {
        return {
            status: response.status,
            data: null
        };
    }

    const result = await response.json();

    return {
        status: response.status,
        data: result.data
    };
};

export default requestHelper;
