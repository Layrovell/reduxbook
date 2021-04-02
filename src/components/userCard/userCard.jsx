import React from 'react';
import {Switch, Route, Link} from "react-router-dom";
import {UserDetails} from "../UserDetails/UserDetails";

export const UserCard = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact>
                <div className="book__item">
                    <Link to={`/info/${user._id}`} className="link">
                        <div className="book__name">
                            {user.name}
                        </div>
                    </Link>
                    <button className="btn">delete</button>
                    <button className="btn">edit</button>
                </div>
            </Route>

            <Route path={`/info/${user._id}`}>
                <UserDetails user={user}/>
            </Route>
        </Switch>
    );
};
