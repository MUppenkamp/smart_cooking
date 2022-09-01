import React from 'react';
import './header.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {Image} from "react-bootstrap";


type HeaderProps = {};

const Header: React.FunctionComponent<HeaderProps> = () => {

    return (
        <div className="header">
            {/*<Image*/}
            {/*    src="images/logo.png"*/}
            {/*    fluid*/}
            {/*    width={50}*/}
            {/*/>*/}
            <h1>LOGO</h1>
            <div className="header__border">
                <FontAwesomeIcon
                    icon={faUser}
                    className="header__border__icon"
                />
            </div>
        </div>
    );
};

export default Header;
