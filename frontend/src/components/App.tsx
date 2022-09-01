import React, {FC, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Navigation from "./mainFrames/navigation/Navigation";
import {Container} from "react-bootstrap";
import SearchBar from "./mainFrames/searchBar/SearchBar";
import NoContent from "./mainFrames/noContent/NoContent";
import SiteName from "./mainFrames/siteName/SiteName";

const App: FC<Record<string, never>> = () => {
    const [selectedNav, setSelectedNav] = useState(1);

    return (
        <>
            <Container>
                <SiteName selectedNav={selectedNav} />
                <SearchBar />
                <Container>
                    {/* TODO Add render of sites here */}
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
