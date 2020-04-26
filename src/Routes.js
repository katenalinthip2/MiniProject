import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import App from "./App";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component ={App} />
                <Route path="/Login" exact component ={Login} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;