import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { selectRecipeWeek } from '../../redux/recipeWeek/recipeWeekSelectors';
import { Image } from 'react-bootstrap';
import { selectUser } from '../../redux/user/userSelectors';
import { fetchCalendarRecipes } from '../../redux/recipeWeek/recipeWeekActions';
import './weekSite.scss';
import { formatDate } from '../../utils/timeHelper';

const WeekSite: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    const recipeWeek = useAppSelector(selectRecipeWeek);

    useEffect(() => {
        if (user) {
            dispatch(fetchCalendarRecipes(user.id));
        }
    }, [user]);

    return (
        <div className='week-site'>
            {
                recipeWeek.map(recipeDay => {
                    return (
                        <div className='week-site__item'>
                            <h2 className='week-site__item__date'>
                                {formatDate(recipeDay.date)}
                            </h2>
                            <Image
                                src={recipeDay.recipe.picture}
                                alt={recipeDay.recipe.name}
                                rounded
                                className='week-site__item__image'
                            />
                            <div className='week-site__item__text'>
                                <h4 className='week-site__item__text__name'>
                                    {recipeDay.recipe.name}
                                </h4>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

WeekSite.displayName = 'WeekSite';

export default WeekSite;
