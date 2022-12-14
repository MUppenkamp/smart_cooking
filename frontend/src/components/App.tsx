import React, {FC, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Navigation from './mainFrames/navigation/Navigation';
import {Container} from 'react-bootstrap';
import SearchBar from './mainFrames/searchBar/SearchBar';
import NoContent from './mainFrames/noContent/NoContent';
import SiteName from './mainFrames/siteName/SiteName';
import RecipeSite from './recipeSite/RecipeSite';
import RecipeDetailsSite from './recipeDetailsSite/RecipeDetailsSite';
import {SelectedSite} from '../constants/selectedSite';
import LoginOrRegisterSite from './loginOrRegisterSite/LoginOrRegisterSite';
import Header from './mainFrames/header/Header';
import {useAppDispatch} from '../hook';
import FavoriteSite from './favoriteSite/FavoriteSite';
import {TRecipe} from '../types/recipe';
import ShoppingListSite from './shoppingListSite/ShoppingListSite';
import WeekSite from './weekSite/WeekSite';
import {getLocalStorage} from '../utils/localstorageHelper';
import {USER_DATA_KEY} from '../constants/localstorage';
import {TUser} from '../types/user';
import {setUser} from '../redux/user/userSlice';
import SettingsSite from './settingsSite/SettingsSits';

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
        const user = getLocalStorage<TUser>(USER_DATA_KEY);
        if (user) {
            dispatch(setUser(user));
        }
    }, []);

    return (
        <>
            <Container>
                {
                    selectedSite !== SelectedSite.LOGIN_OR_REGISTRATION_SITE
                    && selectedSite !== SelectedSite.SETTINGS_SITE
                    && <Header setSelectedSite={setSelectedSite}/>
                }
                <SiteName selectedSite={selectedSite}/>
                {
                    selectedSite !== SelectedSite.WEEK_SITE
                    && selectedSite !== SelectedSite.SHOPPING_LIST_SITE
                    && selectedSite !== SelectedSite.LOGIN_OR_REGISTRATION_SITE
                    && selectedSite !== SelectedSite.SETTINGS_SITE
                    && selectedSite !== SelectedSite.ERROR
                    && selectedSite !== SelectedSite.NOTHING
                    && <SearchBar/>
                }
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
                            <FavoriteSite
                                setSelectedRecipe={setSelectedRecipe}
                            />
                        )
                    }
                    {
                        selectedSite === SelectedSite.WEEK_SITE && (
                            <WeekSite/>
                        )
                    }
                    {
                        selectedSite === SelectedSite.SHOPPING_LIST_SITE && (
                            <ShoppingListSite/>
                        )
                    }
                    {
                        selectedSite === SelectedSite.LOGIN_OR_REGISTRATION_SITE && (
                            <LoginOrRegisterSite
                                selectedSite={selectedSite}
                                setSelectedSite={setSelectedSite}
                            />
                        )
                    }
                    {
                        selectedSite === SelectedSite.SETTINGS_SITE && (
                            <SettingsSite />
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
