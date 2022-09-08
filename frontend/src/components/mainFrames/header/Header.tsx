import React, { Dispatch, SetStateAction } from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { SelectedSite } from '../../../constants/selectedSite';
import { useAppSelector } from '../../../hook';
import { selectUser } from '../../../redux/user/userSelectors';


type HeaderProps = {
    setSelectedSite: Dispatch<SetStateAction<SelectedSite | null>>
};

const Header: React.FunctionComponent<HeaderProps> = ({
                                                          setSelectedSite
                                                      }) => {
    const user = useAppSelector(selectUser);

    return (
        <div
            className='header'
        >
            {/*<Image*/}
            {/*    src='images/logo.png'*/}
            {/*    fluid*/}
            {/*    width={50}*/}
            {/*/>*/}
            <h1>LOGO</h1>
            <div
                className='header__border'
                onClick={() => setSelectedSite(user ? SelectedSite.SETTINGS_SITE : SelectedSite.LOGIN_OR_REGISTRATION_SITE)}
            >
                <FontAwesomeIcon
                    icon={faUser}
                    className='header__border__icon'
                />
            </div>
        </div>
    );
};

export default Header;
