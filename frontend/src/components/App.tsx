import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Navigation from "./mainFrames/navigation/Navigation";
import {Container} from "react-bootstrap";
import SearchBar from "./mainFrames/searchBar/SearchBar";

const App: FC<Record<string, never>> = () => {
    return (
        <>
            <Container>
                <SearchBar />
            </Container>
            <Navigation />
        </>
)};

export default App;
