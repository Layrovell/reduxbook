import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateUser} from "../../../store/actions";
import {Button} from "../../Button/Button";
import {Input} from "../../Input/Input";

export const UserEdit = ({user}) => {
    const [newNameToSet, setNewNameToSet] = useState(user.name);
    const [newNumberToSet, setNewNumberToSet] = useState(user.number);
    const dispatch = useDispatch();

    const handleChangeSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(newNameToSet, newNumberToSet, user._id));
    }

    return (
        <>
            <form className="form form__edit" onSubmit={handleChangeSubmit}>
                <div className='form__details'>
                    <span className='form__circle center'/>
                </div>
                <Input
                    value={newNameToSet}
                    action={(e) => setNewNameToSet(e.target.value)}
                    className='input input-edit'
                />
                <Input
                    value={newNumberToSet}
                    action={(e) => setNewNumberToSet(e.target.value)}
                    className='input input-edit'
                />
                <Button text='save' className='btn btn__save' />
            </form>
            <Link to="/">
                <Button text='back' className='btn btn__back' />
            </Link>
        </>
    );
};
