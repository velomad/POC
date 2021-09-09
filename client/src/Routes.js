import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Components from "./Pages/Components";
import Grid from "./Pages/Grid";
import Scheduler from "./Pages/Scheduler";

const Routes = () => {
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div>
      <BrowserRouter>
        <Navbar
          title={
            pathName === "/" ? "Schedule Appointment" : "Patient Registration"
          }
        />
        <Switch>
          <Route exact="/" path="/" component={Scheduler} />
          <Route path="/grid" component={Grid} />
          <Route path="/components" component={Components} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
