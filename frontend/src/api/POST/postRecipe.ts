import requestHelper from '../../utils/requestHelper';
import { SMART_COOKING_URL } from '../../constants/url';
import { TPostCalendarRecipeParams, TPostFavoriteRecipeParams, } from '../../types/postRecipe';
import { TCreateRecipe, TRecipe, TRecipeWeek } from '../../types/recipe';

export const postFavoriteRecipe = async ({userId, body}: TPostFavoriteRecipeParams) => {
    return requestHelper<TRecipe>({
        requestUrl: `${SMART_COOKING_URL}/recipe/${userId}/favorite`,
        options: {
            method: 'POST',
            body
        }
    });
};

// ToDo: Update
export const postRecipe = async (recipe: TCreateRecipe) => {
    const response = await requestHelper<TRecipe>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'POST'
        }
    });

    if (response.status === 200) {
        return response;
    }

    return {
        status: 200,
        data: {
            id: 100,
            name: recipe.name,
            picture: recipe.picture,
            duration: recipe.duration,
            difficultyId: recipe.difficultyId,
            difficultyName: '',
            description: recipe.description,
            calorificValue: recipe.calorificValue,
            protein: recipe.protein,
            fat: recipe.fat,
            carbohydrates: recipe.carbohydrates,
            portion: recipe.portion,
            isFavorite: recipe.isFavorite,
            isOwn: recipe.isOwn,
            ingredients: [{
                id: 100,
                name: 'Test Ingredient',
                quantity: 10,
                quantityUnitId: 1,
                quantityUnitName: 'Gramm'
            }],
        }
    };
};

// ToDo: Update
export const postCalendarRecipes = async (params: TPostCalendarRecipeParams) => {
    const response = await requestHelper<TRecipeWeek>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'POST'
        }
    });

    if (response.status === 200) {
        return response;
    }

    return {
        status: 200,
        data: [{
            date: '2022-09-05',
            recipe: {
                id: 0,
                name: 'Pizza',
                picture: '',
                duration: 20,
                difficultyId: 1,
                difficultyName: 'Einfach',
                description: 'Pizza Salami',
                calorificValue: 1,
                protein: 1,
                fat: 1,
                carbohydrates: 1,
                portion: 1,
                isFavorite: true,
                isOwn: false,
                ingredients: [{
                    id: 0,
                    name: 'Salami',
                    quantity: 5,
                    quantityUnitId: 1,
                    quantityUnitName: 'Gramm'
                }]
            }
        }, {
            date: '2022-09-06',
            recipe: {
                id: 1,
                name: 'Nudeln',
                picture: '',
                duration: 20,
                difficultyId: 1,
                difficultyName: 'Einfach',
                description: 'Nudeln mit Nudeln',
                calorificValue: 10,
                protein: 10,
                fat: 10,
                carbohydrates: 10,
                portion: 10,
                isFavorite: false,
                isOwn: false,
                ingredients: [{
                    id: 1,
                    name: 'Nudeln',
                    quantity: 500,
                    quantityUnitId: 1,
                    quantityUnitName: 'Gramm'
                }]
            }
        }, {
            date: '2022-09-07',
            recipe: {
                id: 3,
                name: 'Pizza',
                picture: '',
                duration: 20,
                difficultyId: 1,
                difficultyName: 'Einfach',
                description: 'Pizza Salami',
                calorificValue: 1,
                protein: 1,
                fat: 1,
                carbohydrates: 1,
                portion: 1,
                isFavorite: false,
                isOwn: false,
                ingredients: [{
                    id: 0,
                    name: 'Salami',
                    quantity: 5,
                    quantityUnitId: 1,
                    quantityUnitName: 'Gramm'
                }]
            }
        }, {
            date: '2022-09-08',
            recipe: {
                id: 4,
                name: 'Pizza',
                picture: '',
                duration: 20,
                difficultyId: 1,
                difficultyName: 'Einfach',
                description: 'Pizza Salami',
                calorificValue: 1,
                protein: 1,
                fat: 1,
                carbohydrates: 1,
                portion: 1,
                isFavorite: false,
                isOwn: false,
                ingredients: [{
                    id: 0,
                    name: 'Salami',
                    quantity: 5,
                    quantityUnitId: 1,
                    quantityUnitName: 'Gramm'
                }]
            }
        }, {
            date: '2022-09-09',
            recipe: {
                id: 5,
                name: 'Pizza',
                picture: '',
                duration: 20,
                difficultyId: 1,
                difficultyName: 'Einfach',
                description: 'Pizza Salami',
                calorificValue: 1,
                protein: 1,
                fat: 1,
                carbohydrates: 1,
                portion: 1,
                isFavorite: false,
                isOwn: false,
                ingredients: [{
                    id: 0,
                    name: 'Salami',
                    quantity: 5,
                    quantityUnitId: 1,
                    quantityUnitName: 'Gramm'
                }]
            }
        }, {
            date: '2022-09-10',
            recipe: {
                id: 6,
                name: 'Pizza',
                picture: '',
                duration: 20,
                difficultyId: 1,
                difficultyName: 'Einfach',
                description: 'Pizza Salami',
                calorificValue: 1,
                protein: 1,
                fat: 1,
                carbohydrates: 1,
                portion: 1,
                isFavorite: false,
                isOwn: false,
                ingredients: [{
                    id: 0,
                    name: 'Salami',
                    quantity: 5,
                    quantityUnitId: 1,
                    quantityUnitName: 'Gramm'
                }]
            }
        }, {
            date: '2022-09-11',
            recipe: {
                id: 7,
                name: 'Pizza',
                picture: '',
                duration: 20,
                difficultyId: 1,
                difficultyName: 'Einfach',
                description: 'Pizza Salami',
                calorificValue: 1,
                protein: 1,
                fat: 1,
                carbohydrates: 1,
                portion: 1,
                isFavorite: false,
                isOwn: false,
                ingredients: [{
                    id: 0,
                    name: 'Salami',
                    quantity: 5,
                    quantityUnitId: 1,
                    quantityUnitName: 'Gramm'
                }]
            }
        }]
    };
};
