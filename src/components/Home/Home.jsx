import React, {useEffect, useState} from 'react';
import {UserAddForm} from "../UserAddForm/UserAddForm";
import {Loader} from "../Loader/Loader";
import {UsersTable} from "../UserTable/UsersTable";
import {useDispatch, useSelector} from "react-redux";
import {createUser, fetchUsers} from "../../store/actions";

export const Home = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.items);
    const isFetching = useSelector(state => state.users.isFetching);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== '' && number !== '') {
            dispatch(createUser(name, number));
        }
    }
    return (
        <>
            <article className="book">
                <button onClick={() => setIsOpen(!isOpen)} className='btn'>new</button>

                {isOpen &&
                <UserAddForm
                    name={name} number={number}
                    setName={setName} setNumber={setNumber}
                    handleSubmit={handleSubmit}
                />
                }

                {isFetching
                    ? <Loader/>
                    : <UsersTable
                        users={users} name={name}
                        number={number} setName={setName}
                        setNumber={setNumber}
                    />
                }
            </article>
        </>
    );
};

