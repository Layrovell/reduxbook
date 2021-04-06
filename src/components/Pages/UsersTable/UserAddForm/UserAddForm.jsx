import React from 'react';
import {Input} from "../../../Input/Input";
import {Button} from "../../../Button/Button";

export const UserAddForm = ({name, number, setName, setNumber, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Input
                value={name}
                action={(e) => setName(e.target.value)}
                className='input'
                placeholder='name'
            />
            <Input
                value={number}
                action={(e) => setNumber(e.target.value)}
                className='input'
                placeholder='number'
            />
            <Button
                className='btn btn__save'
                type='submit'
                text='add'
            />
        </form>
    );
};
