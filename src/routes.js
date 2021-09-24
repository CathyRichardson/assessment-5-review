import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from './Components/Auth/Auth';
import Dash from './Components/Dash/Dash';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';

export default (
    <Switch>
        <Route path='/post/:id' component={Post} />
        <Route path='/form' component={Form} />
        <Route path='/dash' component={Dash} />
        <Route path='/' component={Auth} />
    </Switch>
)