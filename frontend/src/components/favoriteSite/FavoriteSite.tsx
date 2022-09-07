import React, { Dispatch, SetStateAction, useEffect } from 'react';
import './favoriteSite.scss';
import { useAppDispatch, useAppSelector } from '../../hook';
import { selectUser } from '../../redux/user/userSelectors';
import { selectFavoriteRecipes } from '../../redux/favoriteRecipes/favoriteRecipesSelectors';
import { fetchFavoriteRecipes } from '../../redux/favoriteRecipes/favoriteRecipesActions';
import RecipeItem from '../mainFrames/recipeItem/RecipeItem';
import { TRecipe } from '../../types/recipe';

type FavoriteSiteProps = {
    setSelectedRecipe: Dispatch<SetStateAction<TRecipe | null>>
};

const FavoriteSite: React.FunctionComponent<FavoriteSiteProps> = ({
                                                                      setSelectedRecipe
                                                                  }) => {
    const user = useAppSelector(selectUser);
    const favoriteRecipes = useAppSelector(selectFavoriteRecipes);

    if (!user || !favoriteRecipes) {
        return <></>;
    }

    return (
        <>
            <h3>Eigene</h3>
            <div className='favorite-site'>
                {
                    favoriteRecipes.map(recipe => {
                        if (!recipe.isOwn) {
                            return <></>;
                        }
                        return (
                            <RecipeItem
                                key={recipe.id}
                                recipe={recipe}
                                setSelectedRecipe={setSelectedRecipe}
                            />
                        );
                    })
                }
            </div>
            <h3>Favoriten</h3>
            <div className='favorite-site'>
                {
                    favoriteRecipes.map(recipe => {
                        if (recipe.isOwn) {
                            return <></>;
                        }
                        return (
                            <RecipeItem
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

export default FavoriteSite;
