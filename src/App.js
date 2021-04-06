import React from "react";
import './App.scss';
import './styles/reset.scss';
import {Switch, Route} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {UserEdit} from "./components/UserEdit/UserEdit";
import {routes} from "./routes";

function App() {
    return (
        <Switch>
            <Route exact path={routes.index} component={Home}/>
            <Route path={routes.editUser} component={UserEdit}/>
        </Switch>
    );
}

export default App;
