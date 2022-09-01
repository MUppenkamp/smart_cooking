import React, { FC, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Navigation from './mainFrames/navigation/Navigation';
import {Container} from 'react-bootstrap';
import SearchBar from './mainFrames/searchBar/SearchBar';
import NoContent from './mainFrames/noContent/NoContent';
import SiteName from './mainFrames/siteName/SiteName';
import Header from './mainFrames/header/Header';
import { fetchRecipes } from "../redux/recipes/recipesActions";
import { useAppDispatch } from "../hook";
import { fetchUser } from "../redux/user/userActions";

const App: FC<Record<string, never>> = () => {
    const dispatch = useAppDispatch();
    const [selectedNav, setSelectedNav] = useState(1);

    useEffect(() => {
        dispatch(fetchUser({
            firstName: 'Jana',
            lastName: 'Walfort',
            mail: 'jana.walort@gmail.com',
            password: '1234'
        }));
        dispatch(fetchRecipes(2));
    }, []);

    return (
        <>
            <Container>
                <Header />
                <SiteName selectedNav={selectedNav} />
                <SearchBar />
                <Container>
                    {/* TODO Add render of sites here */}
                    {
                        selectedNav === 1 && (
                            <>
                            </>
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
                    <NoContent />
                </Container>
            </Container>
            <Navigation
                selectedNav={selectedNav}
                setSelectedNav={setSelectedNav}
            />
        </>
)};

export default App;
