import React from 'react';
import './navigation.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUtensils, faHeart, faCalendar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navigation: React.FunctionComponent = () => {
    return (
        <div className="navigation">
            <div className="navigation__item">
                <FontAwesomeIcon
                    icon={faUtensils}
                    className="navigation__item__icon navigation__item__icon--active"
                />
                <p className="navigation__item__text navigation__item__text--active">Rezepte</p>
            </div>
            <div className="navigation__item">
                <FontAwesomeIcon
                    icon={faHeart}
                    className="navigation__item__icon"
                />
                <p className="navigation__item__text">Favoriten</p>
            </div>
            <div className="navigation__item">
                <FontAwesomeIcon
                    icon={faCalendar}
                    className="navigation__item__icon"
                />
                <p className="navigation__item__text">Wochenplan</p>
            </div>
            <div className="navigation__item">
                <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="navigation__item__icon"
                />
                <p className="navigation__item__text">Einkaufliste</p>
            </div>
        </div>
)};

Navigation.displayName = 'Navigation';
export default Navigation;
