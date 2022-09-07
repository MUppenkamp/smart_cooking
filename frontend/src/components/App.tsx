import React, {FC, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Navigation from './mainFrames/navigation/Navigation';
import {Container} from 'react-bootstrap';
import SearchBar from './mainFrames/searchBar/SearchBar';
import NoContent from './mainFrames/noContent/NoContent';
import SiteName from './mainFrames/siteName/SiteName';
import Header from './mainFrames/header/Header';
import RecipeSite from './recipeSite/RecipeSite';
import {TRecipe} from "../types/recipe";
import RecipeDetailsSite from "./recipeDetailsSite/RecipeDetailsSite";
import { createRecipe, fetchRecipes } from "../redux/recipes/recipesActions";
import { useAppDispatch } from "../hook";
import { fetchUser, updateUser } from "../redux/user/userActions";
import { fetchFavoriteRecipes, updateFavorite } from "../redux/favoriteRecipes/favoriteRecipesActions";
import { fetchCalendarRecipes, randomizeCalendarRecipes } from "../redux/recipeWeek/recipeWeekActions";

const App: FC<Record<string, never>> = () => {
    const [selectedNav, setSelectedNav] = useState(1 as number|null);
    const [selectedRecipe, setSelectedRecipe] = useState(null as TRecipe | null);
    const dispatch = useAppDispatch();
    const [selectedNav, setSelectedNav] = useState(1);

    useEffect(() => {
        if (selectedRecipe !== null) setSelectedNav(null);
    }, [selectedRecipe]);

    useEffect(() => {
        if (selectedNav && selectedNav > 0) setSelectedRecipe(null);
    }, [selectedNav]);

    useEffect(() => {
        // Favorites
        dispatch(fetchFavoriteRecipes(2));
        dispatch(updateFavorite({
            id: 1,
            isFavorite: true
        }));

        // Recipes
        dispatch(fetchRecipes(2));
        dispatch(createRecipe({
            name: 'Test',
            picture: '',
            duration: 30,
            difficultyId: 2,
            description: 'Create Test',
            calorificValue: 30,
            protein: 26,
            fat: 87,
            carbohydrates: 44,
            portion: 42,
            isFavorite: true,
            isOwn: true,
            ingredients: [{
                name: 'Test Ingredient',
                quantity: 10,
                quantityUnitId: 1
            }]
        }));

        // RecipeWeek
        dispatch(fetchCalendarRecipes(2));
        dispatch(randomizeCalendarRecipes());

        // ShoppingList

        // User
        dispatch(fetchUser({
            firstName: 'Jana',
            lastName: 'Walfort',
            mail: 'jana.walort@gmail.com',
            password: '1234'
        }));
        dispatch(updateUser({
            id: 2,
            firstName: 'Test'
        }));
    }, []);

    return (
        <>
            <Container>
                <Header />
                <SiteName selectedNav={selectedNav} />
                <SearchBar />
                <Container className='inner-container'>
                    {
                        selectedNav === 1 && (
                            <RecipeSite
                                setSelectedRecipe={setSelectedRecipe}
                            />
                        )
                    }
                    {
                        selectedNav === 2 && (
                            <>
                            </>
                        )
                    }
                    {
                        selectedNav === 3 && (
                            <>
                            </>
                        )
                    }
                    {
                        selectedNav === 4 && (
                            <>
                            </>
                        )
                    }
                    {
                        selectedNav === 0 && (
                            <NoContent />
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
                selectedNav={selectedNav}
                setSelectedNav={setSelectedNav}
            />
        </>
)};

export default App;
