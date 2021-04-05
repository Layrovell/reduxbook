import React from 'react';
import './UserCard.scss';
import {Switch, Route, Link} from "react-router-dom";
import {UserDetails} from "../UserDetails/UserDetails";
import {useDispatch} from "react-redux";
import {removeUser} from "../../store/actions";
import {Button} from "../Button/Button";

export const UserCard = ({user}) => {
    const dispatch = useDispatch();

    return (
        <Switch>
            <Route path="/" exact>
                <div className="book__item">
                    <span className='form__circle' />
                    <div className="info">
                        <div className="book__name">{user.name}</div>
                        <div className="book__number">{user.number}</div>
                    </div>
                    <Button
                        action={()=>dispatch(removeUser(user._id))}
                        className='btn btn__delete'
                        text='delete'
                    />
                    <Link to={`/info/${user._id}`}>
                        <Button className='btn btn__edit' text='edit'/>
                    </Link>
                </div>
            </Route>

            <Route path={`/info/${user._id}`}>
                <UserDetails user={user} />
            </Route>
        </Switch>
    );
};
