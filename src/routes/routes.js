import React from "react";
import {Route} from 'react-router';
import {UserEdit} from "../pages/UserEdit/UserEdit";
import {routeLinks} from './index';
import App from "../pages/App";
import {UserAddForm} from "../pages/UserAddForm/UserAddForm";

export const routes = (
    <>
        <Route exact path={routeLinks.index} component={App}/>
        <Route path={routeLinks.editUser} component={UserEdit}/>
        <Route path={routeLinks.addUser} component={UserAddForm}/>
    </>
)
