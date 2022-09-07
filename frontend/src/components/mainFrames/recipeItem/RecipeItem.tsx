import React, { Dispatch, SetStateAction, useEffect } from 'react';
import './recipeItem.scss';
import { TRecipe } from '../../../types/recipe';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faGear } from '@fortawesome/free-solid-svg-icons';

type RecipeSiteItemProps = {
    recipe: TRecipe,
    setSelectedRecipe: Dispatch<SetStateAction<TRecipe | null>>,
    showGear?: boolean
};

const RecipeItem: React.FunctionComponent<RecipeSiteItemProps> = ({
                                                                      recipe,
                                                                      setSelectedRecipe,
                                                                      showGear = false
                                                                  }) => {
    useEffect(() => {
        console.log('PARAMS', showGear);
    }, []);

    return (
        <div
            className='recipe-item__recipe'
            onClick={() => setSelectedRecipe(recipe)}
        >
            <div className='recipe-item'>
                <div className='recipe-item__icon'>
                    <FontAwesomeIcon
                        icon={recipe.isOwn && showGear ? faGear : faHeart}
                        className={recipe.isOwn && showGear
                            ? 'recipe-item__icon__own'
                            : (recipe.isFavorite ? 'recipe-item__icon__favorite' : 'recipe-item__icon__not-favorite')}
                    />
                </div>
            </div>
            <Image
                src={recipe.picture}
                alt={recipe.name}
                rounded
                className='recipe-item__recipe__image'
            />
            <p className='recipe-item__recipe__text'>{recipe.name}</p>
        </div>
    );
};

export default RecipeItem;
