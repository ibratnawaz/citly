import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import NavBar from "components/NavBar";
import Container from "components/Container";
import Table from "components/Links/Table";
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
        <Container>
          <Route path="/" component={Table} />
        </Container>
      </Switch>
    </Router>
  );
};

export default App;
