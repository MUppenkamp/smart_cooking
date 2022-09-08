import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './addRecipeItem.scss';

const AddRecipeItem = () => {
    return (
        <div
            className='recipe-add'
            onClick={() => {
                console.log('Open Create Recipe View!');
            }}
        >
            <div className='recipe-add__item'>
                <div className='recipe-add__item__icon'>
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
            </div>
            <p className='recipe-item__recipe__text'>Hinzufügen</p>
        </div>
    );
};

export default AddRecipeItem;
