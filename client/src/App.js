import { navigate, redirectTo } from "@reach/router";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import NewPost from "./Components/NewPost/NewPost";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";
import SignUp from "./pages/signUp/signUp";

import "./App.css";

export const UserContext = React.createContext([]);
console.log(UserContext);

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const loginAttempt = async (email, password) => {
    const result = await (
      await fetch("http://localhost:5000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
    ).json();

    console.log(result);

    if (result.accesstoken) {
      //  call function that saves token to local storage.
      window.localStorage.setItem("token", result.accesstoken);

      setUser(result.user);
      console.log("Navigating");

      navigate("/home");
    } else {
      console.log(result.error);
    }
  };

  const logOutCallback = async () => {
    await fetch("http://localhost:4000/logout", {
      method: "POST",
      credentials: "include" // Needed to include the cookie
    });
    // Clear user from context
    setUser({});
    // Navigate back to startpage
    navigate("/");
    window.localStorage.setItem("token", "");
  };

  useEffect(() => {
    // call function that gets token from local storage.
    const savedTeoken = window.localStorage.getItem("token");
    async function refreshToken() {
      const result = await (
        await fetch("http://localhost:4000/refresh_token", {
          method: "POST",
          credentials: "include", // Needed to include the cookie
          headers: {
            "Content-Type": "application/json"
          }
        })
      ).json();
      setUser({
        // accesstoken: result.accesstoken
        accesstoken: savedTeoken
      });
      setLoading(false);
    }
    refreshToken();
  }, []);

  console.log("User: " + user);

  let userToken = window.localStorage.getItem("token");
  console.log("userToken: " + userToken);
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Switch>
          <Category path="/home" />

          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          {/* <Route exact path="/search" component={Search}></Route>  */}
          <Route
            exact
            path="/login"
            render={() => <Login loginAttempt={loginAttempt} />}
          ></Route>
          <Favorite path="/Favorite" />
          <Route exact path="/Favorite" component={Favorite}></Route>
          <Route exact path="/signUp" component={SignUp}></Route>
          <Route exact path="/newPost" component={NewPost}></Route>
          {/* <Route  component={Four04}></Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
