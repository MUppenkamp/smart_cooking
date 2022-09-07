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

const App: FC<Record<string, never>> = () => {
    const [selectedNav, setSelectedNav] = useState(1 as number|null);
    const [selectedRecipe, setSelectedRecipe] = useState(null as TRecipe | null);

    useEffect(() => {
        if (selectedRecipe !== null) setSelectedNav(null);
    }, [selectedRecipe]);

    useEffect(() => {
        if (selectedNav && selectedNav > 0) setSelectedRecipe(null);
    }, [selectedNav]);

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
