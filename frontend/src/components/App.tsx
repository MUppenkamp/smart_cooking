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
import RecipeDetailsSite from './recipeDetailsSite/RecipeDetailsSite';
import { SelectedSite } from '../constants/selectedSite';
import LoginSite from './loginSite/LoginSite';
import { useAppDispatch } from '../hook';
import { fetchUser } from '../redux/user/userActions';
import FavoriteSite from './favoriteSite/FavoriteSite';
import { TRecipe } from '../types/recipe';

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

    useEffect(() => {
        dispatch(fetchUser({
            firstName: 'Jana',
            lastName: 'Walfort',
            mail: 'jana.walort@gmail.com',
            password: '1234'
        }));
    }, []);

    return (
        <>
            <Container>
                <Header setSelectedSite={setSelectedSite}/>
                <SiteName selectedSite={selectedSite}/>
                <SearchBar/>
                <Container className='inner-container'>
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
                                <FavoriteSite
                                    setSelectedRecipe={setSelectedRecipe}
                                />
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
