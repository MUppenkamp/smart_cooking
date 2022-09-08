export type THelper<T> = {
    status: number;
    data: T | null;
};

export type THelperParams = {
    requestUrl: string;
    options: object;
};
