import type { RootState } from "../store";

export const selectShoppingListFetchState = (state: RootState) => state.shoppingList.fetchState;

export const selectShoppingList = (state: RootState) => state.shoppingList.data;
