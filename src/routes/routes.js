import React from "react";
import {Route} from 'react-router';
import {UserEdit} from "../components/UserTable/UserEdit/UserEdit";
import {routeLinks} from './index';
import App from "../containers/App";

export const routes = (
    <div>
        <Route exact path={routeLinks.index} component={App}/>
        <Route path={routeLinks.editUser} component={UserEdit}/>
    </div>
)
