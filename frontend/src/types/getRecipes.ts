import { TRecipe } from "./recipe";

export type TGetRecipesParams = {

};

export type TGetRecipesReturns = {
    status: number;
    data: Array<TRecipe>
};
