const requestHelper = async <T>(param: THelperParams): Promise<THelper<T>> => {
    const options = {}


    const response = await fetch(param.requestUrl, options);

    if (response.status !== 200) {
        return {
            status: response.status,
            data: null
        };
    }


    const result = await response.json() as T;

    console.log('Request response:', result);

    return {
        status: response.status,
        data: result
    };
};

export default requestHelper;
