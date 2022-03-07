import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Nav from "./Nav";
import Main from "./routes/Main";
import Crypto from "./routes/crypto/Crypto";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/crypto">
            <Crypto />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
