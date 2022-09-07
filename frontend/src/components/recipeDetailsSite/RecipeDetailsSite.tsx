import React from 'react';
import './recipeDetailsSite.scss';
import { TRecipe } from '../../types/recipe';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBreadSlice,
    faClock,
    faEgg,
    faFillDrip,
    faFire,
    faHeart,
    faSignal,
    faUsers
} from '@fortawesome/free-solid-svg-icons';
import { durationFormat } from '../../utils/timeHelper';

type RecipeDetailsSiteProps = {
    recipe: TRecipe
};

const RecipeDetailsSite: React.FunctionComponent<RecipeDetailsSiteProps> = ({
                                                                                recipe
                                                                            }) => {

    return (
        <div className="recipe-details-site">
            <Image
                src={recipe.picture}
                alt={recipe.name}
                rounded
                className="recipe-details-site__image"
            />
            <div className="recipe-details-site__headline">
                <h3>{recipe.name}</h3>
                <FontAwesomeIcon
                    icon={faHeart}
                    className={recipe.isFavorite ? 'recipe-details-site__headline__favorite' : 'recipe-details-site__headline__not-favorite'}
                />
            </div>
            <div className="recipe-details-site__infos">
                <div className="recipe-details-site__infos__item">
                    <FontAwesomeIcon
                        icon={faClock}
                        className="recipe-details-site__infos__item__icon"
                    />
                    <p>{durationFormat(recipe.duration)}</p>
                </div>
                <div className="recipe-details-site__infos__item">
                    <FontAwesomeIcon
                        icon={faSignal}
                        className="recipe-details-site__infos__item__icon"
                    />
                    <p>{recipe.difficultyName}</p>
                </div>
                <div className="recipe-details-site__infos__item">
                    <FontAwesomeIcon
                        icon={faUsers}
                        className="recipe-details-site__infos__item__icon"
                    />
                    <p>{recipe.portion === 1 ? `${recipe.portion} Person` : `${recipe.portion} Personen`}</p>
                </div>
            </div>
            {
                (recipe.calorificValue || recipe.protein || recipe.fat || recipe.carbohydrates) && (
                    <>
                        <h3 className="recipe-details-site__nutritional-values-headline">Nährwerte pro Portion</h3>
                        <div className="recipe-details-site__nutritional-values">
                            <div className="recipe-details-site__nutritional-values__items">
                                {
                                    recipe.calorificValue && (
                                        <div className="recipe-details-site__nutritional-values__items__item">
                                            <FontAwesomeIcon
                                                icon={faFire}
                                                className="recipe-details-site__nutritional-values__items__item__icon"
                                            />
                                            <p>{recipe.calorificValue} kCal</p>
                                        </div>
                                    )
                                }
                                {
                                    recipe.protein && (
                                        <div className="recipe-details-site__nutritional-values__items__item">
                                            <FontAwesomeIcon
                                                icon={faEgg}
                                                className="recipe-details-site__nutritional-values__items__item__icon"
                                            />
                                            <p>{recipe.protein} g</p>
                                        </div>
                                    )
                                }
                                {
                                    recipe.fat && (
                                        <div className="recipe-details-site__nutritional-values__items__item">
                                            <FontAwesomeIcon
                                                icon={faFillDrip}
                                                className="recipe-details-site__nutritional-values__items__item__icon"
                                            />
                                            <p>{recipe.fat} g</p>
                                        </div>
                                    )
                                }
                                {
                                    recipe.carbohydrates && (
                                        <div className="recipe-details-site__nutritional-values__items__item">
                                            <FontAwesomeIcon
                                                icon={faBreadSlice}
                                                className="recipe-details-site__nutritional-values__items__item__icon"
                                            />
                                            <p>{recipe.carbohydrates} g</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </>
                )
            }
            <h3 className="recipe-details-site__ingredients-headline">Zutaten</h3>
            <div className="recipe-details-site__ingredients">
                <div className="recipe-details-site__ingredients__quantity">
                    {
                        recipe.ingredients.map(i => (
                            <p>{i.quantity} {i.quantityUnitName}</p>
                        ))
                    }
                </div>
                <div className="recipe-details-site__ingredients__name">
                    {
                        recipe.ingredients.map(i => (
                            <p>{i.name}</p>
                        ))
                    }
                </div>
            </div>
            <h3 className="recipe-details-site__description-headline">Zubereitung</h3>
            <p dangerouslySetInnerHTML={{ __html: recipe.description }}/>
        </div>
    );
};

export default RecipeDetailsSite;
