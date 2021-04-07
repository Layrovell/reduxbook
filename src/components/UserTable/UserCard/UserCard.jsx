import React from 'react';
import './UserCard.scss';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeUser} from "../../../store/actions";

export const UserCard = ({user}) => {
    const dispatch = useDispatch();

    return (
        <div className="book__item">
            <span className='form__circle'/>
            <div>
                <div className="book__name">{user.name}</div>
                <div className="book__number">{user.number}</div>
            </div>
            <button onClick={() => dispatch(removeUser(user._id))} className='btn'>delete</button>
            <Link to={`/reduxbook/user/${user._id}`} className='btn'>edit</Link>
        </div>
    );
};
