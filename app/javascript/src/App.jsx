import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import NavBar from "components/NavBar";
import Dashboard from "components/Dashboard";
import { initializeLogger } from "common/logger";

const App = () => {
  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
