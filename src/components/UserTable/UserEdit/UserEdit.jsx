import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser, updateUser} from "../../../store/actions";
import {Loader} from "../../Loader/Loader";

export const UserEdit = () => {
    const {id} = useParams();
    const user = useSelector(state => state.users.items.find(el => el._id === id));

    const [newName, setNewName] = useState(user.name);
    const [newNumber, setNewNumber] = useState(user.number);

    const isFetching = useSelector(state => state.users.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentUser(id));
    }, []);

    const handleChangeSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(newName, newNumber, user._id));
    }

    return (
        <>
            {isFetching
                ? <Loader/>
                : (
                    <form className="form__edit" onSubmit={handleChangeSubmit}>
                        <div className='form__details'>
                            <span className='form__circle'/>
                        </div>
                        {isFetching ? <Loader/>
                            : (
                                <>
                                    <input
                                        value={newName}
                                        className='input-edit'
                                        onChange={(e) => setNewName(e.target.value)}
                                    />
                                    <input
                                        value={newNumber}
                                        className='input-edit'
                                        onChange={(e) => setNewNumber(e.target.value)}
                                    />
                                </>
                            )}
                        <div className="buttons">
                            <button className='btn btn__save'>save</button>
                            <Link to={`/reduxbook/`} className='btn'>back</Link>
                        </div>
                    </form>
                )}
        </>
    );
};
