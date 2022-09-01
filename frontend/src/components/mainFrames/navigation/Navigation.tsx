import React, {Dispatch, SetStateAction} from 'react';
import './navigation.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUtensils, faHeart, faCalendar, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

type NavigationProps = {
    selectedNav: number,
    setSelectedNav: Dispatch<SetStateAction<number>>
};

const Navigation: React.FunctionComponent<NavigationProps> = ({
                                                                  selectedNav,
                                                                  setSelectedNav
                                                              }) => {

    return (
        <div className='navigation'>
            <div
                className='navigation__item'
                onClick={() => setSelectedNav(1)}
            >
                <FontAwesomeIcon
                    icon={faUtensils}
                    className={`navigation__item__icon ${selectedNav === 1 ? 'navigation__item__icon--active' : ''}`}
                />
                <p className={`navigation__item__text ${selectedNav === 1 ? 'navigation__item__text--active' : ''}`}>Rezepte</p>
            </div>
            <div
                className='navigation__item'
                onClick={() => setSelectedNav(2)}
            >
                <FontAwesomeIcon
                    icon={faHeart}
                    className={`navigation__item__icon ${selectedNav === 2 ? 'navigation__item__icon--active' : ''}`}
                />
                <p className={`navigation__item__text ${selectedNav === 2 ? 'navigation__item__text--active' : ''}`}>Favoriten</p>
            </div>
            <div
                className='navigation__item'
                onClick={() => setSelectedNav(3)}
            >
                <FontAwesomeIcon
                    icon={faCalendar}
                    className={`navigation__item__icon ${selectedNav === 3 ? 'navigation__item__icon--active' : ''}`}
                />
                <p className={`navigation__item__text ${selectedNav === 3 ? 'navigation__item__text--active' : ''}`}>Wochenplan</p>
            </div>
            <div
                className='navigation__item'
                onClick={() => setSelectedNav(4)}
            >
                <FontAwesomeIcon
                    icon={faShoppingCart}
                    className={`navigation__item__icon ${selectedNav === 4 ? 'navigation__item__icon--active' : ''}`}
                />
                <p className={`navigation__item__text ${selectedNav === 4 ? 'navigation__item__text--active' : ''}`}>Einkaufliste</p>
            </div>
        </div>
    )
};

Navigation.displayName = 'Navigation';
export default Navigation;
