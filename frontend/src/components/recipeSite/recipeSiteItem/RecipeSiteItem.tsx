import React from 'react';
import './recipeSiteItem.scss';
import {TRecipe} from "../../../types/recipe";
import {Image} from "react-bootstrap";

type RecipeSiteItemProps = {
    recipe: TRecipe
};

const RecipeSiteItem: React.FunctionComponent<RecipeSiteItemProps> = ({
    recipe
                                                                      }) => {

    return (
        <div className='recipe-site-item'>
            <Image
                src={recipe.picture}
                alt={recipe.name}
                rounded
                className='recipe-site-item__image'
            />
            <p>{recipe.name}</p>
        </div>
    );
};

export default RecipeSiteItem;
