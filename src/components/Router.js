import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route>
              <Home exact path="/" />
            </Route>
          </>
        ) : (
          <Route>
            <Auth exact path="/auth" />
          </Route>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;
