import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Navigation from "./mainFrames/navigation/Navigation";

const App: FC<Record<string, never>> = () => {
    return (
        <>
            <Navigation />
        </>
)};

export default App;
