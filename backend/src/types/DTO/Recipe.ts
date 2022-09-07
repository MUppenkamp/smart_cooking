export type TRecipeDTO = {
    id: number;
    name?: string;
    picture?: string;
    duration?: number;
    difficultyName?: string;
    description?: string;
    calorificValue?: number;
    protein?: number;
    fat?: number;
    carbohydrates?: number;
    portion?: number;
    isFavorite?: boolean;
    isOwn?: boolean;
    ingredients?: TIngredients[]
}

export type TIngredients = {
    id: number;
    name?: string;
    quantity?: number;
    quantityUnitId?: number;
    quantityUnitName?: string
}

export type TShoppingListRecipeDTO = {
    ingredients?: TShoppingListIngredients[]
} & TRecipeDTO

export type TShoppingListIngredients = {
    isChecked: boolean;
} & TIngredients
