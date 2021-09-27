import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "../../protectedRoute";
import Createprofile from "../createProfile";
import "./index.scss";
import Login from "./login";
import Signup from "./signup";

function LoginSignup() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute
          exact
          path="/create-profile"
          component={Createprofile}
        />
      </Switch>
    </Router>
  );
}

export default LoginSignup;
