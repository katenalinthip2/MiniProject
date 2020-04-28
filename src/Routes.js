import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import App from "./App";
import ShowCount from "./ShowCount";
import Home from './Home'
import Collect from "./Collect";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Collects" exact component ={App} />
                <Route path="/Login" exact component ={Login} />
                <Route path="/" exact component ={Home} />
                
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;