import "./Login.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const routeChange = () => {
    let path = "/home";
    history.push(path);
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" onClick={routeChange}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
