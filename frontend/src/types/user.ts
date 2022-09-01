export type TUser = {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    mail: string;
    picture?: string;
};

export type TLoginData = {
    mail: string;
    password: string;
};

export type TRegisterData = {
    firstName: string;
    lastName: string;
    password: string;
    mail: string;
};
