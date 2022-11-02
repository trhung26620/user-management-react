import logo from './logo.svg';
import './App.scss';
import Navigation from './user/Navigation';
import Home from './user/Home';
import User from './user/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <img src={logo} className="App-logo" alt="logo" />
              <Home />
            </Route>
            <Route path="/user">
              <User />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
