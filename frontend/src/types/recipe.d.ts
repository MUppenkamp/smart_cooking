type Ingredient = {
    id: number;
    name: string;
    quantity: number;
    quantityUnit: {
        id: number;
        name: string;
    }
};

type Recipe = {
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
    ingredients: Array<Ingredient>;
};

type RecipeState = {
    data: Array<Recipe>
};

type RecipeWeekDay = {
    date: Date;
    recipe: Recipe;
}

type RecipeWeek = Array<RecipeWeekDay>;
