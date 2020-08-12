import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const authenticated = Boolean(localStorage.getItem("access_token"));

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            authenticated === false ? <Redirect to="/login" /> : <Component {...props} />
        }
    />
);


export default AuthRoute;