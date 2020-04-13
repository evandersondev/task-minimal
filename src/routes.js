import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

const PrivateRoute = (props) => {
  const isLogged = !!localStorage.getItem("userId");
  return isLogged ? <Route {...props} /> : <Redirect to="/" />;
};

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);
