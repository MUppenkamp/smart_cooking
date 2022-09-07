import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const AddRecipe = () => {
    return (
        <div className='recipe-add'>
            <FontAwesomeIcon icon={faPlus}/>
        </div>
    );
};


export default AddRecipe;
