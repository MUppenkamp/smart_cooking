export type TIngredient = {
    id: number;
    name: string;
    quantity: number;
    quantityUnitId: number;
    quantityUnitName: string;
};

export type TRecipe = {
    id: number;
    name: string;
    picture: string;
    duration: number;
    difficultyId: number;
    difficultyName: string;
    description: string;
    calorificValue?: number;
    protein?: number;
    fat?: number;
    carbohydrates?: number;
    portion: number;
    isFavorite?: boolean;
    isOwn?: boolean;
    ingredients: Array<TIngredient>;
};

export type TRecipeWeekDay = {
    date: string;
    recipe: TRecipe;
};

export type TRecipeWeek = Array<TRecipeWeekDay>;
