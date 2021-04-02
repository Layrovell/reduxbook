import React, {useEffect} from "react";
import './App.scss';
import './styles/reset.scss';
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./store/actions";
import {UserCard} from "./components/userCard/userCard";
import {Loader} from "./components/Loader/Loader";

function App() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.items);
    const isFetching = useSelector(state => state.users.isFetching);
    const isFetchErr = useSelector(state => state.users.isFetchErr);
    const isShowAddForm = useSelector(state => state.users.isShowAddForm);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <Route path="/">
            <div className='App'>
                <article className="book">
                    {isFetching
                        ? <Loader />
                        : users.map(user => <UserCard user={user} key={user._id}/>)
                    }
                </article>
            </div>
        </Route>
    );
}

export default App;
