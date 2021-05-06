/**
 * @author Veena Kumar
 * May 2021
 */

import "./Login.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

/**
 * This component creates the Login Page
 * The user must type in a valid user name and password
 */
function Login() {
  //#region states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  ////#endregion

  // valid accounts, for the sake of this assignment
  const accounts = {
    "someone@example.com": "password",
  };
  const history = useHistory();

  /**
   * route the path to home page when the user logs in
   */
  const routeChange = (event) => {
    // if input is not valid, then alert the user
    if (accounts[email] !== password) {
      Swal.fire({
        title: "Invalid Login",
        text: "Username or Password is incorrect",
        icon: "warning",
        confirmButtonText: "Okay",
      });
      event.stopPropagation();
      event.preventDefault();
      return false;
    }
    let path = "/home";
    history.push(path);
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <form className="register-form" onSubmit={routeChange}>
          <label>Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
