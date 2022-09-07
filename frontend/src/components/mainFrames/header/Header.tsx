import React, { Dispatch, SetStateAction } from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { SelectedSite } from '../../../constants/selectedSite';


type HeaderProps = {
    setSelectedSite: Dispatch<SetStateAction<SelectedSite | null>>
};

const Header: React.FunctionComponent<HeaderProps> = ({
                                                          setSelectedSite
                                                      }) => {

    return (
        <div
            className='header'
            // TODO isLoggedIn ? setSelectedSite.SETTINGS_SITE : setSelectedSite.LOGIN_SITE
            onClick={() => setSelectedSite(SelectedSite.LOGIN_SITE)}
        >
            {/*<Image*/}
            {/*    src='images/logo.png'*/}
            {/*    fluid*/}
            {/*    width={50}*/}
            {/*/>*/}
            <h1>LOGO</h1>
            <div className='header__border'>
                <FontAwesomeIcon
                    icon={faUser}
                    className='header__border__icon'
                />
            </div>
        </div>
    );
};

export default Header;
