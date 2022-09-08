import React, { Dispatch, SetStateAction } from 'react';
import './recipeItem.scss';
import { TRecipe } from '../../../types/recipe';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { updateFavorite } from '../../../redux/favoriteRecipes/favoriteRecipesActions';
import { selectUser } from '../../../redux/user/userSelectors';

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
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);

    return (
        <div
            className='recipe-item__recipe'
        >
            <div
                className='recipe-item'
                onClick={() => {
                    if (!user) {
                        return;
                    }

                    dispatch(updateFavorite({
                        userId: user.id,
                        body: {
                            id: recipe.id,
                            isFavorite: !recipe.isFavorite
                        }
                    }));
                }}
            >
                <div className='recipe-item__icon'>
                    <FontAwesomeIcon
                        icon={recipe.isOwn && showGear ? faGear : faHeart}
                        className={recipe.isOwn && showGear
                            ? 'recipe-item__icon__own'
                            : (recipe.isFavorite ? 'recipe-item__icon__favorite' : 'recipe-item__icon__not-favorite')}
                    />
                </div>
            </div>
            <div
                onClick={() => setSelectedRecipe(recipe)}
            >
                <Image
                    src={recipe.picture}
                    alt={recipe.name}
                    rounded
                    className='recipe-item__recipe__image'
                />
                <p className='recipe-item__recipe__text'>{recipe.name}</p>
            </div>
        </div>
    );
};

export default RecipeItem;
