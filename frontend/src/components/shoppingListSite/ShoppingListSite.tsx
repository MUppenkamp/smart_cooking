import React, { useEffect } from 'react';
import './shoppingListSite.scss';
import { TShoppingList } from '../../types/shoppingList';
import { Form } from 'react-bootstrap';
import { formatDate } from '../../utils/timeHelper';
import { useAppDispatch, useAppSelector } from '../../hook';
import { fetchShoppingList } from '../../redux/shoppingList/shoppingListActions';
import { selectUser } from '../../redux/user/userSelectors';
import { useSelector } from 'react-redux';
import { selectShoppingList } from '../../redux/shoppingList/shoppingListSelectors';

type ShoppingListSiteProps = {};

const ShoppingListSite: React.FunctionComponent<ShoppingListSiteProps> = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    const shoppingList = useSelector(selectShoppingList);

    useEffect(() => {
        if (!user) return;
        dispatch(fetchShoppingList(user.id));
    }, [user])

    return (
        <div className='shopping-list'>
            {
                shoppingList.map(s => {
                    return (
                        <>
                            <h2 className='shopping-list__headline'>{formatDate(new Date(s.date).toDateString())}</h2>
                            <h3>{s.recipe.name}</h3>
                            <div className='shopping-list__ingredients'>
                                <div className='shopping-list__ingredients__quantity'>
                                    {
                                        s.recipe.ingredients.map(i => (
                                            <p className={i.isChecked ? 'shopping-list__ingredients-checked' : ''}>{i.quantity} {i.quantityUnitName}</p>
                                        ))
                                    }
                                </div>
                                <div className='shopping-list__ingredients__name'>
                                    {
                                        s.recipe.ingredients.map(i => (
                                            <p className={i.isChecked ? 'shopping-list__ingredients-checked' : ''}>{i.name}</p>
                                        ))
                                    }
                                </div>
                                <div className='shopping-list__ingredients__checkbox'>
                                    {
                                        s.recipe.ingredients.map(i => (
                                            <Form.Check
                                                className='shopping-list__ingredients__checkbox__item'
                                                checked={i.isChecked}
                                                onChange={(value) => {
                                                    // ToDo: change checked
                                                    console.log(value.target.checked)
                                                }}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </>
                    );
                })
            }
        </div>
    );
};

export default ShoppingListSite;
