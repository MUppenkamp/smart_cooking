import React from 'react';
import './searchBar.scss';
import {InputGroup, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons'


type SearchBarProps = {};

const SearchBar: React.FunctionComponent<SearchBarProps> = () => {

    return (
        <div className="search-bar">
            <InputGroup>
                <InputGroup.Text>
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="search-bar__icon"
                    />
                </InputGroup.Text>
                <Form.Control
                    disabled
                />
            </InputGroup>
        </div>
    );
};

SearchBar.displayName = "SearchBar";
export default SearchBar;
