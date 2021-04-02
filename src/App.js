import React, {useEffect} from "react";
import './App.scss';
import './styles/reset.scss';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {Home} from './components/Home/Home';
import {Form} from './components/Form/Form';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./store/actions";

function App() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.items);
    const isFetching = useSelector(state => state.users.isFetching);
    const isFetchErr = useSelector(state => state.users.isFetchErr);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <Router>
            <div className='App'>
                <nav className='nav'>
                    <ul className='nav_list'>
                        <li className='nav_link'>
                            <Link to='/home' data-item='Home'>Home</Link>
                        </li>
                        <li className='nav_link'>
                            <Link to='/form' data-item='Form'>Form</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/reduxbook" render={() => {
                        return <Redirect to="/home"/>
                    }}
                    />
                    <Route path='/home' render={() =>
                        <Home
                            users={users}
                            isFetching={isFetching}
                            isFetchErr={isFetchErr}
                        />
                    }/>
                    <Route path='/form' render={() => <Form /> }/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
