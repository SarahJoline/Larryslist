// import { useEffect, useState } from "@reach/router";
import React, { useEffect, useState } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter
} from "react-router-dom";

// import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import NewPost from "./Components/NewPost/NewPost";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";
import SignUp from "./pages/signUp/signUp";

import "./App.css";

// import Category from "./Components/Category/Category";

export const UserContext = React.createContext([]);
// import Category from"./Components/Category/Category"

function App(props) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  console.log("App props: " + props);

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
      // navigate("/home");
      props.history.push("/home");
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
    // navigate("/");
    window.localStorage.setItem("token", "");
  };

  useEffect(() => {
    // call function that gets token from local storage.
    const savedTeoken = window.localStorage.getItem("token");
    async function refreshToken() {
      const user = await (
        await fetch("http://localhost:5000/refresh_token", {
          method: "POST",
          credentials: "include", // Needed to include the cookie
          headers: {
            "Content-Type": "application/json"
          }
        })
      ).json();
      if (user._id) {
        setUser(user);
      }

      // setLoading(false);
    }
    refreshToken();
  }, []);

  console.log("User: " + user);

  let userToken = window.localStorage.getItem("token");
  console.log("userToken: " + userToken);
  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      <Switch>
        {/* <Category path="/home" /> */}

        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        {/* <Route exact path="/search" component={Search}></Route>  */}
        <Route
          exact
          path="/login"
          render={() => <Login loginAttempt={loginAttempt} />}
        ></Route>
        {/* <Favorite path="/Favorite" /> */}
        <Route exact path="/Favorite" component={Favorite}></Route>
        <Route exact path="/signUp" component={SignUp}></Route>
        <Route exact path="/newPost" component={NewPost}></Route>
        {/* <Route  component={Four04}></Route> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
