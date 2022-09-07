import React, { Dispatch, SetStateAction } from 'react';
import './favoriteSite.scss';
import { useAppSelector } from '../../hook';
import { selectUser } from '../../redux/user/userSelectors';
import { selectFavoriteRecipes } from '../../redux/favoriteRecipes/favoriteRecipesSelectors';
import RecipeItem from '../mainFrames/recipeItem/RecipeItem';
import { TRecipe } from '../../types/recipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddRecipe from '../recipeSite/addRecipe/AddRecipe';

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
                <AddRecipe />
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
                                showGear={true}
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
