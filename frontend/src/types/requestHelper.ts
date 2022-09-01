export type THelper<T> = {
    status: number;
    data: T | null;
};

export type THelperParams = {
    requestUrl: string;
    method: string;
    options: object;
};
