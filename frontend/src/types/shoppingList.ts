import { TRecipe } from "./recipe";

export type TShoppingListItem = {
    date: Date;
    recipe: TRecipe;
};

export type TShoppingList = Array<TShoppingListItem>;
