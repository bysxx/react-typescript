import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Crypto from './components/crypto/Crypto';
import Football from './components/football/Football';
import Test from './components/test/Test';

function App() {
  return (
    <div>
      <Router basename={'/'}>
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
