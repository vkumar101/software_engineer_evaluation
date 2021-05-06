/**
 * @author Veena Kumar
 * May 2021
 */

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../login/Login";
import HomePage from "../homePage/HomePage";

/**
 * route between the login and home page
 */
function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={HomePage} />
    </Router>
  );
}

export default App;
