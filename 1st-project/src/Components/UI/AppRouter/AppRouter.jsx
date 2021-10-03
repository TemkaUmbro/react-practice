import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Error from "../../../pages/Error";
import Posts from "../../../pages/Posts";
import PostIdPage from "../../../pages/PostIdPage";
import { routes } from "../../../router/Router";

const AppRouter = () => {
    return (
        <Switch>
            {routes.map(route =>
                <Route 
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                />
            )}
        </Switch>
    )
} 

export default AppRouter