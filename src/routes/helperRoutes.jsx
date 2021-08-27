import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../services/Auth";
import React, { useContext } from "react";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => (!!currentUser ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export const PublicRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => (!currentUser ? <Component {...props} /> : <Redirect to="/timeline" />)}
    />
  );
};
