import React, { useEffect, useRef, useState } from "react";

import Message from "../../Components/Message/Message";
import AuthService from "../../Service/AuthService";

import "./signUp.css";

const Register = (props) => {
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ username: "", password: "", email: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push("/");
        }, 2000);
      }
    });
  };

  return (
    <div className="loginDiv">
      <div className="loginContainer">
        <div className="title">
          <h2 className="h2">Welcome to sign up page!</h2>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <div className="inputRow">
              <label htmlFor="username" className="label">
                Username:{" "}
              </label>

              <input
                className="input"
                type="text"
                name="username"
                value={user.username}
                onChange={onChange}
                placeholder="Enter Username"
              />
            </div>
            <div className="inputRow">
              <label htmlFor="password" className="label">
                Password:{" "}
              </label>

              <input
                type="password"
                name="password"
                value={user.password}
                onChange={onChange}
                className="input"
                placeholder="Enter Password"
              />
            </div>
            <div className="inputRow">
              <label htmlFor="email" className="label">
                Email:{" "}
              </label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={onChange}
                className="input"
                placeholder="Enter email"
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
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Register;
