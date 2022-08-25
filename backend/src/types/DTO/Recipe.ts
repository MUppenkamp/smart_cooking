
export type TRecipeDTO = {
    id: number;
    name?: string;
    picture?: string;
    duration?: number;
    difficulty?: {
        name?: string;
    };
    description?: string;
    calorificValue?: number;
    protein?: number;
    fat?: number;
    carbohydrates?: number;
    portion?: number;
    isFavorite?: boolean;
    isOwn?: boolean
    ingredients?: TIngredients[]
}

export type TIngredients = {
    id: number;
    name?: string;
    quantity?: number;
    quantityUnit?: {
        id?: number;
        name?: string
    };
}
