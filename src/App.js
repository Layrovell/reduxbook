import React from "react";
import './App.scss';
import './styles/reset.scss';
import {Switch, Route} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {UserEdit} from "./components/UserEdit/UserEdit";

function App() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/user/:id' component={UserEdit}/>
        </Switch>
    );
}

export default App;
