import React, { Component, useState } from "react";
import "./signUp.css";
import API from "../../Components/Utility/API";

import { navigate } from "@reach/router";

const SignUp = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await (
      await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
    ).json();
    if (!result.error) {
      console.log(result.message);
      props.history.push("/");
    } else {
      console.log(result.error);
    }
  };

  const handleChange = e => {
    if (e.currentTarget.name === "email") {
      setEmail(e.currentTarget.value);
    } else {
      setPassword(e.currentTarget.value);
    }
  };

  return (
    <div className="container">
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div>
            <label>Email</label>
          </div>
          <div>
            <input
              value={email}
              onChange={handleChange}
              type="text"
              name="email"
              // placeholder="Email"
              autoComplete="email"
            />
          </div>
          <div>
            <label>Password</label>
          </div>
          <div>
            <input
              value={password}
              onChange={handleChange}
              type="password"
              name="password"
              autoComplete="current-password"
            // placeholder="Password"
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
