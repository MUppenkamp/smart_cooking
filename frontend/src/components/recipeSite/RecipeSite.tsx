import React, { Dispatch, SetStateAction } from 'react';
import './recipeSite.scss';
import { TRecipe } from '../../types/recipe';
import RecipeItem from '../mainFrames/recipeItem/RecipeItem';
import { useAppSelector } from '../../hook';
import { selectUser } from '../../redux/user/userSelectors';
import { selectRecipes } from '../../redux/recipes/recipesSelectors';

type RecipeSiteProps = {
    setSelectedRecipe: Dispatch<SetStateAction<TRecipe | null>>
};

const RecipeSite: React.FunctionComponent<RecipeSiteProps> = ({
                                                                  setSelectedRecipe
                                                              }) => {
    const user = useAppSelector(selectUser);
    const recipes = useAppSelector(selectRecipes);

    const date = new Date;
    let hours = date.getHours();
    let greeting = (hours < 12) ? 'Guten Morgen' : ((hours <= 18 && hours >= 12) ? 'Guten Mittag' : 'Guten Abend');

    if (!user || !recipes) {
        return <></>;
    }

    return (
        <>
            <h1>{greeting}{user.firstName.length > 0 ? `, ${user.firstName}` : ''}!</h1>
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
