import React from 'react';
import './shoppingListSite.scss';
import { TShoppingList } from '../../types/shoppingList';
import { Form } from 'react-bootstrap';

type ShoppingListSiteProps = {};

const ShoppingListSite: React.FunctionComponent<ShoppingListSiteProps> = () => {
    const shoppingList = [{
        date: new Date('2022-09-05'),
        recipe: {
            id: 1,
            name: 'Pizza Salami',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n' +
                '\n' +
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n' +
                '\n' +
                'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU',
            difficultyId: 1,
            difficultyName: 'Leicht',
            duration: 100,
            portion: 2,
            calorificValue: 1154,
            protein: 43.25,
            fat: 62.74,
            carbohydrates: 102.17,
            isFavorite: false,
            ingredients: [
                {
                    id: 1,
                    name: 'Mehl',
                    quantity: 400,
                    quantityUnitId: 1,
                    quantityUnitName: 'g',
                    isChecked: true
                },
                {
                    id: 2,
                    name: 'Trockenhefe',
                    quantity: 1,
                    quantityUnitId: 5,
                    quantityUnitName: 'Pck.'
                },
                {
                    id: 3,
                    name: 'Käse',
                    quantity: 200,
                    quantityUnitId: 1,
                    quantityUnitName: 'g',
                    isChecked: true
                },
                {
                    id: 4,
                    name: 'Öl',
                    quantity: 8,
                    quantityUnitId: 3,
                    quantityUnitName: 'EL',
                    isChecked: true
                },
                {
                    id: 5,
                    name: 'Zwiebel',
                    quantity: 1,
                    quantityUnitId: 6,
                    quantityUnitName: 'Anzahl'
                },
                {
                    id: 6,
                    name: 'Tomaten',
                    quantity: 500,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 7,
                    name: 'Salami',
                    quantity: 200,
                    quantityUnitId: 1,
                    quantityUnitName: 'g',
                    isChecked: true
                },
            ]
        }
    }, {
        date: new Date('2022-09-06'),
        recipe: {
            id: 2,
            name: 'Pizza Salami',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n' +
                '\n' +
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n' +
                '\n' +
                'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU',
            difficultyId: 1,
            difficultyName: 'Leicht',
            duration: 100,
            portion: 2,
            calorificValue: 1154,
            protein: 43.25,
            fat: 62.74,
            carbohydrates: 102.17,
            isFavorite: false,
            ingredients: [
                {
                    id: 1,
                    name: 'Mehl',
                    quantity: 400,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 2,
                    name: 'Trockenhefe',
                    quantity: 1,
                    quantityUnitId: 5,
                    quantityUnitName: 'Pck.'
                },
                {
                    id: 3,
                    name: 'Käse',
                    quantity: 200,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 4,
                    name: 'Öl',
                    quantity: 8,
                    quantityUnitId: 3,
                    quantityUnitName: 'EL'
                },
                {
                    id: 5,
                    name: 'Zwiebel',
                    quantity: 1,
                    quantityUnitId: 6,
                    quantityUnitName: 'Anzahl'
                },
                {
                    id: 6,
                    name: 'Tomaten',
                    quantity: 500,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 7,
                    name: 'Salami',
                    quantity: 200,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
            ]
        }
    }, {
        date: new Date('2022-09-07'),
        recipe: {
            id: 3,
            name: 'Pizza Salami',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n' +
                '\n' +
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n' +
                '\n' +
                'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU',
            difficultyId: 1,
            difficultyName: 'Leicht',
            duration: 100,
            portion: 2,
            calorificValue: 1154,
            protein: 43.25,
            fat: 62.74,
            carbohydrates: 102.17,
            isFavorite: false,
            ingredients: [
                {
                    id: 1,
                    name: 'Mehl',
                    quantity: 400,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 2,
                    name: 'Trockenhefe',
                    quantity: 1,
                    quantityUnitId: 5,
                    quantityUnitName: 'Pck.'
                },
                {
                    id: 3,
                    name: 'Käse',
                    quantity: 200,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 4,
                    name: 'Öl',
                    quantity: 8,
                    quantityUnitId: 3,
                    quantityUnitName: 'EL'
                },
                {
                    id: 5,
                    name: 'Zwiebel',
                    quantity: 1,
                    quantityUnitId: 6,
                    quantityUnitName: 'Anzahl'
                },
                {
                    id: 6,
                    name: 'Tomaten',
                    quantity: 500,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 7,
                    name: 'Salami',
                    quantity: 200,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
            ]
        }
    }, {
        date: new Date('2022-09-08'),
        recipe: {
            id: 4,
            name: 'Pizza Salami',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n' +
                '\n' +
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n' +
                '\n' +
                'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU',
            difficultyId: 1,
            difficultyName: 'Leicht',
            duration: 100,
            portion: 2,
            calorificValue: 1154,
            protein: 43.25,
            fat: 62.74,
            carbohydrates: 102.17,
            isFavorite: false,
            ingredients: [
                {
                    id: 1,
                    name: 'Mehl',
                    quantity: 400,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 2,
                    name: 'Trockenhefe',
                    quantity: 1,
                    quantityUnitId: 5,
                    quantityUnitName: 'Pck.'
                },
                {
                    id: 3,
                    name: 'Käse',
                    quantity: 200,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 4,
                    name: 'Öl',
                    quantity: 8,
                    quantityUnitId: 3,
                    quantityUnitName: 'EL'
                },
                {
                    id: 5,
                    name: 'Zwiebel',
                    quantity: 1,
                    quantityUnitId: 6,
                    quantityUnitName: 'Anzahl'
                },
                {
                    id: 6,
                    name: 'Tomaten',
                    quantity: 500,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 7,
                    name: 'Salami',
                    quantity: 200,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
            ]
        }
    }, {
        date: new Date('2022-09-09'),
        recipe: {
            id: 5,
            name: 'Pizza Salami',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n' +
                '\n' +
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n' +
                '\n' +
                'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU',
            difficultyId: 1,
            difficultyName: 'Leicht',
            duration: 100,
            portion: 2,
            calorificValue: 1154,
            protein: 43.25,
            fat: 62.74,
            carbohydrates: 102.17,
            isFavorite: false,
            ingredients: [
                {
                    id: 1,
                    name: 'Mehl',
                    quantity: 400,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 2,
                    name: 'Trockenhefe',
                    quantity: 1,
                    quantityUnitId: 5,
                    quantityUnitName: 'Pck.'
                },
                {
                    id: 3,
                    name: 'Käse',
                    quantity: 200,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 4,
                    name: 'Öl',
                    quantity: 8,
                    quantityUnitId: 3,
                    quantityUnitName: 'EL'
                },
                {
                    id: 5,
                    name: 'Zwiebel',
                    quantity: 1,
                    quantityUnitId: 6,
                    quantityUnitName: 'Anzahl'
                },
                {
                    id: 6,
                    name: 'Tomaten',
                    quantity: 500,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 7,
                    name: 'Salami',
                    quantity: 200,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
            ]
        }
    }, {
        date: new Date('2022-09-10'),
        recipe: {
            id: 6,
            name: 'Pizza Salami',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n' +
                '\n' +
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n' +
                '\n' +
                'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU',
            difficultyId: 1,
            difficultyName: 'Leicht',
            duration: 100,
            portion: 2,
            calorificValue: 1154,
            protein: 43.25,
            fat: 62.74,
            carbohydrates: 102.17,
            isFavorite: false,
            ingredients: [
                {
                    id: 1,
                    name: 'Mehl',
                    quantity: 400,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 2,
                    name: 'Trockenhefe',
                    quantity: 1,
                    quantityUnitId: 5,
                    quantityUnitName: 'Pck.'
                },
                {
                    id: 3,
                    name: 'Käse',
                    quantity: 200,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 4,
                    name: 'Öl',
                    quantity: 8,
                    quantityUnitId: 3,
                    quantityUnitName: 'EL'
                },
                {
                    id: 5,
                    name: 'Zwiebel',
                    quantity: 1,
                    quantityUnitId: 6,
                    quantityUnitName: 'Anzahl'
                },
                {
                    id: 6,
                    name: 'Tomaten',
                    quantity: 500,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 7,
                    name: 'Salami',
                    quantity: 200,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
            ]
        }
    }, {
        date: new Date('2022-09-11'),
        recipe: {
            id: 7,
            name: 'Pizza Salami',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n' +
                '\n' +
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n' +
                '\n' +
                'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU',
            difficultyId: 1,
            difficultyName: 'Leicht',
            duration: 100,
            portion: 2,
            calorificValue: 1154,
            protein: 43.25,
            fat: 62.74,
            carbohydrates: 102.17,
            isFavorite: false,
            ingredients: [
                {
                    id: 1,
                    name: 'Mehl',
                    quantity: 400,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 2,
                    name: 'Trockenhefe',
                    quantity: 1,
                    quantityUnitId: 5,
                    quantityUnitName: 'Pck.'
                },
                {
                    id: 3,
                    name: 'Käse',
                    quantity: 200,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 4,
                    name: 'Öl',
                    quantity: 8,
                    quantityUnitId: 3,
                    quantityUnitName: 'EL'
                },
                {
                    id: 5,
                    name: 'Zwiebel',
                    quantity: 1,
                    quantityUnitId: 6,
                    quantityUnitName: 'Anzahl'
                },
                {
                    id: 6,
                    name: 'Tomaten',
                    quantity: 500,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
                {
                    id: 7,
                    name: 'Salami',
                    quantity: 200,
                    quantityUnitId: 1,
                    quantityUnitName: 'g'
                },
            ]
        }
    },] as TShoppingList;

    return (
        <div className='shopping-list'>
            {
                shoppingList.map(s => {
                    return (
                        <>
                            <h2 className='shopping-list__headline'>{s.date.toDateString()}</h2>
                            <h3>{s.recipe.name}</h3>
                            <div className='shopping-list__ingredients'>
                                <div className='shopping-list__ingredients__quantity'>
                                    {
                                        s.recipe.ingredients.map(i => (
                                            <p className={i.isChecked ? 'shopping-list__ingredients-checked' : ''}>{i.quantity} {i.quantityUnitName}</p>
                                        ))
                                    }
                                </div>
                                <div className='shopping-list__ingredients__name'>
                                    {
                                        s.recipe.ingredients.map(i => (
                                            <p className={i.isChecked ? 'shopping-list__ingredients-checked' : ''}>{i.name}</p>
                                        ))
                                    }
                                </div>
                                <div className='shopping-list__ingredients__checkbox'>
                                    {
                                        s.recipe.ingredients.map(i => (
                                            <Form.Check
                                                className='shopping-list__ingredients__checkbox__item'
                                                checked={i.isChecked}
                                                onChange={(value) => console.log(value.target.checked)}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </>
                    );
                })
            }
        </div>
    );
};

export default ShoppingListSite;
