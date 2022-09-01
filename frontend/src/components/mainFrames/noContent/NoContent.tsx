import React from 'react';
import './noContent.scss';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type NoContentProps = {};

const NoContent: React.FunctionComponent<NoContentProps> = () => {

    return (
        <div className="no-content">
            <p>Es sind aktuell keine Daten vorhanden, die wir Dir anzeigen können</p>
            <div className="no-content__center">
                <FontAwesomeIcon
                    icon={faFaceFrown}
                    className="no-content__center__icon"
                />
            </div>

        </div>
    );
};

export default NoContent;
