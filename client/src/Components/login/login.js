import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "../../App";
import "./login.css";

const Login = props => {
  const user = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    props.loginAttempt(email, password);
  };

  useEffect(() => {
    let user = window.localStorage.getItem("token");
    console.log(user);
  }, [user]);

  const handleChange = e => {
    if (e.currentTarget.name === "email") {
      setEmail(e.currentTarget.value);
    } else {
      setPassword(e.currentTarget.value);
    }
  };

  return (
    <div className="loginDiv">
      <div className="loginContainer">
        <div className="title">
          <h1> Welcome to LarrysList</h1>
          <h1> Please log in to start your search</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="login-input">
            <div className="inputRow">
              <label className="label">Email</label>
              <input
                className="input"
                value={email}
                onChange={handleChange}
                type="text"
                name="email"
                // placeholder="Email"
                autoComplete="email"
              />
            </div>
            <div className="inputRow">
              <label className="label">Password</label>
              <input
                className="input"
                value={password}
                onChange={handleChange}
                type="password"
                name="password"
                autoComplete="current-password"
                // placeholder="Password"
              />
            </div>
            <button
              className="btn btn-dark btn-lg btn-block mt-4"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
