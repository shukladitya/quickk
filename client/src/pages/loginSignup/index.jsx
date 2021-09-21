import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.scss";
import Login from "./login";
import Signup from "./signup";

function LoginSignup() {
  return (
    <Router>
      <div className="banner"></div>
      <div className="fixed-position">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default LoginSignup;
