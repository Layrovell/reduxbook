import React from 'react';

export const UserAddForm = ({name, number, setName, setNumber, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='name'
            />
            <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder='number'
            />
            <button className='btn' type='submit'>add</button>
        </form>
    );
};
