import React from 'react';
import {useDispatch} from "react-redux";
import {removeUser} from "../../store/actions";

export const Home = ({users}) => {
    const dispatch = useDispatch();
    return (
        <section className='section'>
            <div className='home'>
                <h3 className='title'>The phonebook</h3>
                <ul className='home__book book'>
                    {users.map(elem =>
                        <li key={elem._id} className='book__item'>
                            <span className="book__icon" />
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
            </div>
        </section>
    );
};

