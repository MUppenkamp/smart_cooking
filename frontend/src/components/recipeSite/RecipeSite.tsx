import React, {useState} from 'react';
import './recipeSite.scss';
import {TUser} from '../../types/user';
import {TRecipe} from "../../types/recipe";
import RecipeSiteItem from "./recipeSiteItem/RecipeSiteItem";

type RecipeSiteProps = {};

const RecipeSite: React.FunctionComponent<RecipeSiteProps> = () => {
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
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU'
    }, {
        id: 1,
        name: 'Pizza Salami',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU'
    }, {
        id: 1,
        name: 'Pizza Salami',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU'
    }, {
        id: 1,
        name: 'Pizza Salami',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU'
    }, {
        id: 1,
        name: 'Pizza Salami',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU'
    }, {
        id: 1,
        name: 'Pizza Salami',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsABh2XiBHmNb2Q5aShyTXi8Ip6ZqorSdhNA&usqp=CAU'
    },] as Array<TRecipe>);

    const date = new Date;
    let hours = date.getHours();
    let greeting = (hours < 12) ? 'Guten Morgen' : ((hours <= 18 && hours >= 12) ? 'Guten Mittag' : 'Guten Abend');

    return (
        <>
            <h1>{greeting}{user.firstName.length > 0 ? `, ${user.firstName}` : ''}!</h1>
            <div className='recipe-site'>
                {
                    recipes.map(recipe => {
                        return <RecipeSiteItem recipe={recipe}/>
                    })
                }
            </div>
        </>
    );
};

export default RecipeSite;
