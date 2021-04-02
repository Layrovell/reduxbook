import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createUser} from '../../../store/actions';

export const AddForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name !== '' && number !== '') {
            dispatch(createUser(name, number));
            setName('');
            setNumber('');
        }
        console.warn('handleSubmit');
    }

    return (
        <form action='' className='form__add' onSubmit={handleSubmit}>
            <h3 className='title'>Create</h3>
                <label htmlFor='firstName'>Name:</label>
                <input
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    type='text'
                    placeholder='John'
                    id='firstName'
                />
                <label htmlFor='phone'>Number:</label>
                <input
                    value={number}
                    onChange={(e) => {
                        setNumber(e.target.value);
                    }}
                    type='text'
                    placeholder='+3 733 333 77 77'
                    id='phone'
                />
                <button className="btn" type="submit">Save</button>
        </form>
    );
};
