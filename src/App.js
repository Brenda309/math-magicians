import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/home';
import Navbar from './components/navbar';
import Quote from './components/quote';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);
export default App;
