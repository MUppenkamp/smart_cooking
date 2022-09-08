import React, { Dispatch, SetStateAction, useEffect } from 'react';
import './recipeSite.scss';
import { TRecipe } from '../../types/recipe';
import RecipeItem from '../mainFrames/recipeItem/RecipeItem';
import { useAppDispatch, useAppSelector } from '../../hook';
import { selectUser } from '../../redux/user/userSelectors';
import { selectRecipes, selectRecipesIds } from '../../redux/recipes/recipesSelectors';
import { fetchRecipes } from '../../redux/recipes/recipesActions';

type RecipeSiteProps = {
    setSelectedRecipe: Dispatch<SetStateAction<TRecipe | null>>
};

const RecipeSite: React.FunctionComponent<RecipeSiteProps> = ({
                                                                  setSelectedRecipe
                                                              }) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    const recipes = useAppSelector(selectRecipes);

    const date = new Date;
    let hours = date.getHours();
    let greeting = (hours < 12) ? 'Guten Morgen' : ((hours <= 18 && hours >= 12) ? 'Guten Mittag' : 'Guten Abend');

    useEffect(() => {
        dispatch(fetchRecipes(user?.id || 0));
    }, [user]);

    if (!recipes) {
        return <></>;
    }

    console.log('recipes', recipes);

    return (
        <>
            <h1>{greeting}{user?.firstName?.length || 0 > 0 ? `, ${user?.firstName}` : ''}!</h1>
            <div className='recipe-site'>
                {
                    recipes.map(recipe => {
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

export default RecipeSite;
