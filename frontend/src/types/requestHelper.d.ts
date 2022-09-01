type THelper<T> = {
    status: number;
    data: T | null;
};

type THelperParams = {
    requestUrl: string;
    method: string;
    options: object;
};
