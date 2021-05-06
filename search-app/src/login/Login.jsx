/**
 * @author Veena Kumar
 * May 2021
 */

import "./Login.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/**
 * This component creates the Login Page
 * The user must type in a valid user name and password
 */
function Login() {
  //#region states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  ////#endregion

  const history = useHistory();

  /**
   * route the path to home page when the user logs in
   */
  const routeChange = () => {
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
