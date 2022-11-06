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
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './user/Login';
import Test from './user/Test';

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return (
      <>
        <Login setToken={setToken} />
        {/* <Test /> */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    )
  }
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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
}

export default App;
