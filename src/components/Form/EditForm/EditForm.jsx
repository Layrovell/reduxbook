import React from 'react';

export const EditForm = () => {
    return (
        <form action='' className='form__edit'>
            <h3 className='title'>Edit</h3>
            <label htmlFor='firstName'>First Name:</label>
            <input
                type='text'
                placeholder='John'
                id='firstName'
            />
            <label htmlFor='lastName'>Last Name:</label>
            <input
                type='text'
                placeholder='Doe'
                id='lastName'
            />
            <label htmlFor='phone'>Phone:</label>
            <input
                type='text'
                placeholder='+3 733 333 77 77'
                id='phone'
            />
            <label htmlFor='email'>Email:</label>
            <input
                type='email'
                placeholder='JDoe@gmail.com'
                id='email'
            />
            <label htmlFor='org'>Organisation:</label>
            <input
                type='text'
                placeholder='NameCompany Inc.'
                id='org'
            />
        </form>
    );
};

