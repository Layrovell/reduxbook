import React, {useEffect, useState} from "react";
import './App.scss';
import './styles/reset.scss';
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createUser, fetchUsers} from "./store/actions";
import {UserCard} from "./components/userCard/userCard";
import {Loader} from "./components/Loader/Loader";
import {AddForm} from "./components/AddForm/AddForm";
import {Button} from "./components/Button/Button";

function App() {
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
        <Route path="/">
            <div className='App'>
                <article className="book">

                    <Button action={() => setIsOpen(!isOpen)} className='btn btn__new' text='new' />

                    {isOpen &&
                    <AddForm
                        name={name}
                        number={number}
                        setName={setName}
                        setNumber={setNumber}
                        handleSubmit={handleSubmit}
                    />
                    }

                    {isFetching
                        ? <Loader/>
                        : users.map(user =>
                            <UserCard
                                user={user} key={user._id}
                                name={name}
                                number={number}
                                setName={setName}
                                setNumber={setNumber}
                            />)
                    }
                </article>
            </div>
        </Route>
    );
}

export default App;