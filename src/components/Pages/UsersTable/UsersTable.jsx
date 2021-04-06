import React from 'react';
import {UserCard} from "./UserCard/UserCard";

export const UsersTable = ({users, name, number, setName, setNumber}) => {
    return (
        <div className='table'>
            {users.map(user => (
                <UserCard
                    user={user} key={user._id}
                    name={name}
                    number={number}
                    setName={setName}
                    setNumber={setNumber}
                />
            ))}
        </div>
    );
};
