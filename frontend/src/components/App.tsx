import React, { FC, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Navigation from './mainFrames/navigation/Navigation';
import { Container } from 'react-bootstrap';
import SearchBar from './mainFrames/searchBar/SearchBar';
import NoContent from './mainFrames/noContent/NoContent';
import SiteName from './mainFrames/siteName/SiteName';
import Header from './mainFrames/header/Header';
import RecipeSite from './recipeSite/RecipeSite';
import { TRecipe } from '../types/recipe';
import RecipeDetailsSite from './recipeDetailsSite/RecipeDetailsSite';
import { useAppDispatch } from '../hook';
import { SelectedSite } from '../constants/selectedSite';
import LoginSite from './loginSite/LoginSite';

const App: FC<Record<string, never>> = () => {
    const [selectedSite, setSelectedSite] = useState(SelectedSite.RECIPE_SITE as SelectedSite | null);
    const [selectedRecipe, setSelectedRecipe] = useState(null as TRecipe | null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (selectedRecipe !== null) setSelectedSite(SelectedSite.NOTHING);
    }, [selectedRecipe]);

    useEffect(() => {
        if (selectedSite && selectedSite > 0) setSelectedRecipe(null);
    }, [selectedSite]);

    // useEffect(() => {
    //     // Favorites
    //     dispatch(fetchFavoriteRecipes(2));
    //     dispatch(updateFavorite({
    //         id: 1,
    //         isFavorite: true
    //     }));
    //
    //     // Recipes
    //     dispatch(fetchRecipes(2));
    //     dispatch(createRecipe({
    //         name: 'Test',
    //         picture: '',
    //         duration: 30,
    //         difficultyId: 2,
    //         description: 'Create Test',
    //         calorificValue: 30,
    //         protein: 26,
    //         fat: 87,
    //         carbohydrates: 44,
    //         portion: 42,
    //         isFavorite: true,
    //         isOwn: true,
    //         ingredients: [{
    //             name: 'Test Ingredient',
    //             quantity: 10,
    //             quantityUnitId: 1
    //         }]
    //     }));
    //
    //     // RecipeWeek
    //     dispatch(fetchCalendarRecipes(2));
    //     dispatch(randomizeCalendarRecipes());
    //
    //     // ShoppingList
    //
    //     // User
    //     dispatch(fetchUser({
    //         firstName: 'Jana',
    //         lastName: 'Walfort',
    //         mail: 'jana.walort@gmail.com',
    //         password: '1234'
    //     }));
    //     dispatch(updateUser({
    //         id: 2,
    //         firstName: 'Test'
    //     }));
    // }, []);


    return (
        <>
            <Container>
                <Header setSelectedSite={setSelectedSite}/>
                <SiteName selectedSite={selectedSite}/>
                <SearchBar/>
                <Container className="inner-container">
                    {
                        selectedSite === SelectedSite.ERROR && (
                            <NoContent/>
                        )
                    }
                    {
                        selectedSite === SelectedSite.RECIPE_SITE && (
                            <RecipeSite
                                setSelectedRecipe={setSelectedRecipe}
                            />
                        )
                    }
                    {
                        selectedSite === SelectedSite.FAVORITE_SITE && (
                            <>
                            </>
                        )
                    }
                    {
                        selectedSite === SelectedSite.WEEK_SITE && (
                            <>
                            </>
                        )
                    }
                    {
                        selectedSite === SelectedSite.SHOPPING_LIST_SITE && (
                            <>
                            </>
                        )
                    }
                    {
                        selectedSite === SelectedSite.LOGIN_SITE && (
                            <>
                                <LoginSite />
                            </>
                        )
                    }
                    {
                        selectedRecipe !== null && (
                            <RecipeDetailsSite
                                recipe={selectedRecipe}
                            />
                        )
                    }
                </Container>
            </Container>
            <Navigation
                selectedSite={selectedSite}
                setSelectedSite={setSelectedSite}
            />
        </>
    );
};

export default App;
