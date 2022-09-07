import React, { Dispatch, SetStateAction } from 'react';
import './navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faHeart, faShoppingCart, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { SelectedSite } from '../../../constants/selectedSite';

type NavigationProps = {
    selectedSite: SelectedSite | null,
    setSelectedSite: Dispatch<SetStateAction<number | null>>
};

const Navigation: React.FunctionComponent<NavigationProps> = ({
                                                                  selectedSite,
                                                                  setSelectedSite
                                                              }) => {

    return (
        <div className="navigation">
            <div
                className="navigation__item"
                onClick={() => setSelectedSite(SelectedSite.RECIPE_SITE)}
            >
                <FontAwesomeIcon
                    icon={faUtensils}
                    className={`navigation__item__icon ${selectedSite === 1 ? 'navigation__item__icon--active' : ''}`}
                />
                <p className={`navigation__item__text ${selectedSite === 1 ? 'navigation__item__text--active' : ''}`}>Rezepte</p>
            </div>
            <div
                className="navigation__item"
                onClick={() => setSelectedSite(SelectedSite.FAVORITE_SITE)}
            >
                <FontAwesomeIcon
                    icon={faHeart}
                    className={`navigation__item__icon ${selectedSite === 2 ? 'navigation__item__icon--active' : ''}`}
                />
                <p className={`navigation__item__text ${selectedSite === 2 ? 'navigation__item__text--active' : ''}`}>Favoriten</p>
            </div>
            <div
                className="navigation__item"
                onClick={() => setSelectedSite(SelectedSite.WEEK_SITE)}
            >
                <FontAwesomeIcon
                    icon={faCalendar}
                    className={`navigation__item__icon ${selectedSite === 3 ? 'navigation__item__icon--active' : ''}`}
                />
                <p className={`navigation__item__text ${selectedSite === 3 ? 'navigation__item__text--active' : ''}`}>Wochenplan</p>
            </div>
            <div
                className="navigation__item"
                onClick={() => setSelectedSite(SelectedSite.SHOPPING_LIST_SITE)}
            >
                <FontAwesomeIcon
                    icon={faShoppingCart}
                    className={`navigation__item__icon ${selectedSite === 4 ? 'navigation__item__icon--active' : ''}`}
                />
                <p className={`navigation__item__text ${selectedSite === 4 ? 'navigation__item__text--active' : ''}`}>Einkaufliste</p>
            </div>
        </div>
    );
};

Navigation.displayName = 'Navigation';
export default Navigation;
