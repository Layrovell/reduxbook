import React from 'react';

export const EditForm = () => {
    return (
        <form action='' className='form__edit'>
            <h3 className='title'>Edit</h3>
            <label htmlFor='firstName'>Name:</label>
            <input
                type='text'
                placeholder='John'
                id='firstName'
            />
            <label htmlFor='phone'>Number:</label>
            <input
                type='text'
                placeholder='+3 733 333 77 77'
                id='phone'
            />
            <button className="btn" type="submit">Save</button>
        </form>
    );
};

