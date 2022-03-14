import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./routes/Nav";
import Main from "./routes/Main";
import Crypto from "./routes/crypto/Crypto";
import Football from "./routes/football/Football";
import Test from "./routes/test/Test";

function App() {
  return (
    <div>
      <Router basename={"/"}>
        <Nav />
        <Switch>
          <Route path="/test" component={Test} />
          <Route path="/football" component={Football} />
          <Route path="/crypto" component={Crypto} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
