import React, { Dispatch, SetStateAction } from 'react';
import './recipeSiteItem.scss';
import { TRecipe } from '../../../types/recipe';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

type RecipeSiteItemProps = {
    recipe: TRecipe,
    setSelectedRecipe: Dispatch<SetStateAction<TRecipe | null>>
};

const RecipeSiteItem: React.FunctionComponent<RecipeSiteItemProps> = ({
                                                                          recipe,
                                                                          setSelectedRecipe
                                                                      }) => {

    return (
        <div
            className="recipe-site-item__recipe"
            onClick={() => setSelectedRecipe(recipe)}
        >
            <div className="recipe-site-item">
                <div className="recipe-site-item__icon">
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={recipe.isFavorite ? 'recipe-site-item__icon__favorite' : 'recipe-site-item__icon__not-favorite'}
                    />
                </div>
            </div>
            <Image
                src={recipe.picture}
                alt={recipe.name}
                rounded
                className="recipe-site-item__recipe__image"
            />
            <p className="recipe-site-item__recipe__text">{recipe.name}</p>
        </div>
    );
};

export default RecipeSiteItem;
