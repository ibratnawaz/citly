import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
const App = () => {
  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
    logger.info("Log from js-logger");
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
