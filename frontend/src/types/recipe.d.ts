type TIngredient = {
    id: number;
    name: string;
    quantity: number;
    quantityUnit: {
        id: number;
        name: string;
    }
};

type TRecipe = {
    id: number;
    name: string;
    picture: string;
    duration: number;
    difficulty: {
        name: string;
    },
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

type TRecipeState = {
    data: Array<TRecipe>
};

type TRecipeWeekDay = {
    date: Date;
    recipe: TRecipe;
}

type TRecipeWeek = Array<TRecipeWeekDay>;
