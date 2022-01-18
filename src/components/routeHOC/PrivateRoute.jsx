import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ Component, role, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      role === "user" ? <Component {...props} /> : <Redirect to={`/${role}`} />
    }
  />
);
export default PrivateRoute;
