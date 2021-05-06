import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        ></link>
      </script>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={HomePage} />
    </Router>
  );
}

export default App;
