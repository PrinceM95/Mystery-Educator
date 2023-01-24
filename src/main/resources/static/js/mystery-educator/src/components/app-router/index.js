import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from '../../pages/home'

const PageSwitch = () => (
    <Switch>
        <Route exact path={'/'} component={HomePage} />
    </Switch>
);

export default PageSwitch;