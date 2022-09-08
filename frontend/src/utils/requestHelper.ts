import { THelper, THelperParams } from '../types/requestHelper';

const requestHelper = async <T>({requestUrl, options}: THelperParams): Promise<THelper<T>> => {
    const response = await fetch(requestUrl, {
        ...options,
        headers: {
            // @ts-ignore
            ...options?.headers,
            'Content-Type': 'application/json'
        },
        // @ts-ignore
        body: (options?.body ? JSON.stringify(options.body) : null)
    });

    if (response.status !== 200) {
        return {
            status: response.status,
            data: null
        };
    }

    const result = await response.json();

    console.log('Request response:', requestUrl, result);

    return {
        status: response.status,
        data: result.data
    };
};

export default requestHelper;
