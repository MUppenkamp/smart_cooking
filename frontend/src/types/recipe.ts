import FetchState from "../constants/fetchState";

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
    calorificValue: number;
    protein: number;
    fat: number;
    carbohydrates: number;
    portion: number;
    isFavourite: boolean;
    isOwn: boolean;
    ingredients: Array<TIngredient>;
};

export type TRecipeWeekDay = {
    date: Date;
    recipe: TRecipe;
}

export type TRecipeWeek = Array<TRecipeWeekDay>;
