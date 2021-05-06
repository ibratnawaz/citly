import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { initializeLogger } from "common/logger";

const App = () => {
  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>WELCOME</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
