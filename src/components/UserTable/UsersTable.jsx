import React from 'react';
import {UserCard} from "./UserCard/UserCard";

export const UsersTable = ({users}) => {
    return (
        users.map(user => (
            <UserCard user={user} key={user._id}/>
        ))
    );
};
