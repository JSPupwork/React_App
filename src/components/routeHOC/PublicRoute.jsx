import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuth ? <Component {...props} /> : <Redirect to="/home" />
    }
  />
);
export default PublicRoute;
