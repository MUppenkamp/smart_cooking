import requestHelper from '../../utils/requestHelper';
import { SMART_COOKING_URL } from '../../constants/url';
import { TRecipe, TRecipeWeek } from '../../types/recipe';

export const getAllRecipes = async (userId: number) => {
    const response = await requestHelper<Array<TRecipe>>({
        requestUrl: `${SMART_COOKING_URL}/recipe/${userId}`,
        options: {
            method: 'GET'
        }
    });

    if (response.status === 200) {
        return response;
    }

    return {
        status: 200,
        data: [{
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
            isFavourite: false,
            isOwn: false,
            ingredients: [{
                id: 0,
                name: 'Salami',
                quantity: 5,
                quantityUnitId: 1,
                quantityUnitName: 'Gramm'
            }]
        }]
    };
};

export const getFavouriteRecipes = async (userId: number) => {
    const response = await requestHelper<Array<TRecipe>>({
        requestUrl: `${SMART_COOKING_URL}/recipe/${userId}/favorite`,
        options: {
            method: 'GET'
        }
    });

    if (response.status === 200) {
        return response;
    }

    return {
        status: 200,
        data: [{
            id: 1,
            name: 'Pizza',
            picture: 'https://www.gutekueche.at/storage/media/recipe/113180/conv/nudeln-in-tomatensauce-default.jpg',
            duration: 20,
            difficultyId: 1,
            difficultyName: 'Einfach',
            description: 'Pizza Salami',
            calorificValue: 1,
            protein: 1,
            fat: 1,
            carbohydrates: 1,
            portion: 1,
            isFavourite: true,
            isOwn: false,
            ingredients: [{
                id: 1,
                name: 'Salami',
                quantity: 500,
                quantityUnitId: 1,
                quantityUnitName: 'Gramm'
            }]
        }]
    };
};

export const getCalendarRecipes = async (userId: number) => {
    const response = await requestHelper<TRecipeWeek>({
        requestUrl: `${SMART_COOKING_URL}/`,
        options: {
            method: 'GET'
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
                isFavourite: true,
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
                isFavourite: false,
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
                isFavourite: false,
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
                isFavourite: false,
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
                isFavourite: false,
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
                isFavourite: false,
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
                isFavourite: false,
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
