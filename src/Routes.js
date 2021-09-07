import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Grid from "./Pages/Grid";
import Scheduler from "./Pages/Scheduler";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact="/" path="/" component={Scheduler} />
          <Route path="/grid" component={Grid} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
