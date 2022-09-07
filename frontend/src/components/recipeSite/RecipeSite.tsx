import React, { Dispatch, SetStateAction, useState } from 'react';
import './recipeSite.scss';
import { TUser } from '../../types/user';
import { TRecipe } from '../../types/recipe';
import RecipeSiteItem from './recipeSiteItem/RecipeSiteItem';

type RecipeSiteProps = {
    setSelectedRecipe: Dispatch<SetStateAction<TRecipe | null>>
};

const RecipeSite: React.FunctionComponent<RecipeSiteProps> = ({
                                                                  setSelectedRecipe
                                                              }) => {
    const [user, setUser] = useState({
        id: 1,
        firstName: 'Mona',
        lastName: 'Uppenkamp',
        password: '*****',
        mail: '',
        picture: ''
    } as TUser);
    const [recipes, setRecipes] = useState([{
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
    }, {
        id: 2,
        name: 'Pizza Salami',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU',
        isFavorite: true
    }, {
        id: 3,
        name: 'Pizza Salami',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU'
    }, {
        id: 4,
        name: 'Pizza Salami',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU'
    }, {
        id: 5,
        name: 'Pizza Salami mit Ananas',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU',
        isFavorite: true
    }, {
        id: 6,
        name: 'Pizza Salami',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU',
        isFavorite: true
    },] as Array<TRecipe>);

    const date = new Date;
    let hours = date.getHours();
    let greeting = (hours < 12) ? 'Guten Morgen' : ((hours <= 18 && hours >= 12) ? 'Guten Mittag' : 'Guten Abend');

    return (
        <>
            <h1>{greeting}{user.firstName.length > 0 ? `, ${user.firstName}` : ''}!</h1>
            <div className="recipe-site">
                {
                    recipes.map(recipe => {
                        return (
                            <RecipeSiteItem
                                key={recipe.id}
                                recipe={recipe}
                                setSelectedRecipe={setSelectedRecipe}
                            />
                        );
                    })
                }
            </div>
        </>
    );
};

export default RecipeSite;
