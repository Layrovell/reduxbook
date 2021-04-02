import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../../store/actions";
import {Loader} from '../Loader/Loader';

export const Home = ({users, isFetching,isFetchErr}) => {
    const dispatch = useDispatch();

    return (
        <section className='section'>
            <div className='home'>
                <h3 className='title'>The phonebook</h3>

                {isFetchErr &&
                    <div>Произошла ошибка! ПОжалуйста обновите страницу!</div>
                }

                {isFetching
                    ? <Loader/>
                    : <ul className='home__book book'>
                        {users.map(elem =>
                            <li key={elem._id} className='book__item'>
                                <span className="book__icon"/>
                                {elem.name}
                                <button
                                    onClick={() => {
                                        dispatch(removeUser(elem._id))
                                    }}
                                >
                                    delete
                                </button>
                            </li>)}
                    </ul>
                }

            </div>
        </section>
    );
};

