import { AuthContext } from "../../Context/AuthContext";
import AuthService from "../../Service/AuthService";
import Message from "../Message/Message";
import React, { useContext, useState } from "react";

const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);
  console.log("authContext: " + authContext);
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/home");
      } else setMessage(message);
      console.log("message : " + message);
    });
  };

  return (
    <div className="loginDiv">
      <div className="loginContainer">
        <div className="title">
          <h1> Welcome to LarrysList</h1>
          <h1> Please log in to start your search</h1>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <div className="login-input">
            <div className="inputRow">
              <label htmlFor="username" className="label">
                Username:{" "}
              </label>
              <input
                type="text"
                name="username"
                onChange={onChange}
                className="input"
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
                onChange={onChange}
                className="input"
                placeholder="Enter Password"
              />
            </div>
            <div className="inputRow">
              <spam>{message}</spam>
            </div>
            <button
              className="btn btn-dark btn-lg btn-block mt-4"
              type="submit"
            >
              Log in{" "}
            </button>
          </div>
        </form>
        {message ? <Message message={message} /> : null}
      </div>
    </div>
  );
};

export default Login;
