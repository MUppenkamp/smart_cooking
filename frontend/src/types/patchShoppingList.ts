export type TPatchShoppingListItemsParams = {
    userId: number;
    body: {
        id: number;
        isChecked: boolean;
    }
};
