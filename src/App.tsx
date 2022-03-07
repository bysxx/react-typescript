import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Main from "./routes/Main";
import Crypto from "./routes/crypto/Crypto";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/crypto">
          <Crypto />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
