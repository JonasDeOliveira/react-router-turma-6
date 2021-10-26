import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home'
import Produto from './pages/Produto'

export const Routes = () =>{
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/produto/:id" component={Produto}/>
            <Route component={() => <div>404</div>}/>
        </Switch>
    )
}