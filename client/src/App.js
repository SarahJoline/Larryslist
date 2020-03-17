import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import SignUp from "./pages/signUp/signUp";
import Category from "./Components/Category/Category";

import { navigate } from "@reach/router";

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
      //
      setUser(result.user);
      console.log("Navigating");
      navigate("/Favorite");
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
  };

  useEffect(() => {
    // call function that gets token from local storage.
    //
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
        accesstoken: result.accesstoken
      });
      setLoading(false);
    }
    refreshToken();
  }, []);

  console.log("User: " + user);

  const addNewResult = queryResult => {
    if (queryResult === null) {
      this.setState({ data: [] });
      return;
    }
    const searchResult = this.normalizeData(queryResult);
    this.setState({ data: searchResult });
  };

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* <Category/> */}

          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/home"
            component={Home}
            addNewResult={addNewResult}
          ></Route>
          {/* <Route exact path="/search" component={Search}></Route>  */}
          <Route
            exact
            path="/login"
            render={() => <Login loginAttempt={loginAttempt} />}
          ></Route>
          <Favorite path="/Favorite" />
          <Route exact path="/Favorite" component={Favorite}></Route>
          <Route exact path="/signUp" component={SignUp}></Route>
          {/* <Route  component={Four04}></Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
