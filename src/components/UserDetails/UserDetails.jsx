import React from 'react';
import {Link} from "react-router-dom";

export const UserDetails = ({user}) => {
    return (
        <>
            <div className="">
                <div>{user.name}</div>
                <div>{user.number}</div>
                <button className="btn btn__edit">edit</button>
            </div>
            <Link to="/">
                <button className="btn btn__back">back</button>
            </Link>
        </>
    );
};
