import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Grid from "./Pages/Grid";
import Scheduler from "./Pages/Scheduler";

const Routes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact="/" path="/" component={Scheduler} />
          <Route path="/grid" component={Grid} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
