import { TRecipe } from "./recipe";

export type TGetShoppingListParams = {};

export type TGetShoppingListReturns = {
    status: number;
    data: TRecipe;
};
