
export type TRecipeDBO = {
    id: number;
    name?: string;
    picture?: string;
    duration?: number;
    difficulty_id?: number;
    description?: string;
    calorificValue?: number;
    protein?: number;
    fat?: number;
    carbohydrates?: number;
    portion?: number;
};

export type GetAllRecipeDBO = {
    id: number;
    name?: string;
    picture?: string;
    duration?: number;
    difficulty_id?: number;
    difficulty_name?: string;
    description?: string;
    calorific_value?: number;
    protein?: number;
    fat?: number;
    carbohydrates?: number;
    portion?: number;
    is_favorite?: boolean;
    is_own?: boolean;
}


export type TIngredientsDBO = {
    id: number;
    name?: string;
    quantity?: number;
    quantity_unit_id?: number;
    quantity_unit_name?: string
}

export type TIngredientWithRecipeId = {
    recipe_id: number;
} & TIngredientsDBO
