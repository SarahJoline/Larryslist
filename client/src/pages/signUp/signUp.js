import React, { Component, useState } from "react";
import "./signUp.css";

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
    <div className="loginDiv">
      <div className="loginContainer">
        <div className="title">
          <h2 className="h2">Welcome to sign up page!</h2>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
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
            <div className="signupBtn">
              <button
                className="btn btn-dark btn-lg btn-block mt-4"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
