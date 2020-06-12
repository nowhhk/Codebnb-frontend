import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import Host from "./pages/host/Host";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Reservation from "./pages/reservation/Reservation";
import Signup from "./pages/signup/Signup";
import MapView from "./pages/list/map/MapView";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/host" component={Host} />
        <Route exact path="/list" component={List} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/index" component={Main} />
        <Route exact path="/reservation" component={Reservation} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/map" component={MapView} />
      </Switch>
    </Router>
  );
};

export default Routes;
