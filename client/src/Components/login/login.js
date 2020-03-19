import React, { useState, useContext, useEffect } from "react";
// import { navigate } from "@reach/router";
import { UserContext } from "../../App";
import "./login.css";

const Login = props => {
  const user = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    props.loginAttempt(email, password);
    // const result = await (
    //   await fetch("http://localhost:5000/login", {
    //     method: "POST",
    //     credentials: "include",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password
    //     })
    //   })
    // ).json();

    // console.log(result);

    // if (result.accesstoken) {
    //   setUser({ accesstoken: result.accesstoken });
    //   console.log("Navigating");
    //   navigate("/Favorite");
    // } else {
    //   console.log(result.error);
    // }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleChange = e => {
    if (e.currentTarget.name === "email") {
      setEmail(e.currentTarget.value);
    } else {
      setPassword(e.currentTarget.value);
      // =======
      // import React, { Component } from 'react'
      // import "./login.css"
      //  class login extends Component {
      //      constructor(){
      //          super()

      //           this.state ={
      //               username: '',
      //               password: '',
      //               redirectTo: null
      //           }
      //      }
      //     //  handleChange =(e)=>{
      //     //      this.setState({
      //     //          [event.target.name]:event.target.value
      //     //      });
      //     //  }

      //     render() {
      //         return (
      //             <div>
      //                  <main>
      //         <h2>Form Inputs</h2>
      //         <form className="form">
      //             <div className="group">
      //                 <input
      //                     type="text"
      //                     name="text"
      //                     className="text input"
      //                     autoComplete="off"
      //                     placeholder="Name/Email"
      //                     autoFocus
      //                 />
      //                 <label htmlFor="text" className="border">
      //                     <span className="text">
      //                     </span>
      //                 </label>
      //             </div>
      //             <div className="group">
      //                 <input
      //                     type="text"
      //                     name="password"
      //                     className="password input"
      //                     autoComplete="off"
      //                     placeholder="password"
      //                     autoFocus
      //                 />
      //                 <label htmlFor="password" className="border">
      //                     <span className="password">
      //                     </span>
      //                 </label>
      //             </div>

      //         </form>
      //     </main>
      //             </div>
      //         )
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <div>Login</div>
        <div className="login-input">
          <input
            value={email}
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="email"
          />
          <input
            value={password}
            onChange={handleChange}
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
