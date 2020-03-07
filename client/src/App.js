import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, Component } from "react";
import Login from "./pages/Login/Login";
import Favorite from "./pages/Favorite/Favorite";
import About from "./pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemList from "./Components/ItemList/ItemList";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorite">
          <Favorite />
        </Route>
        {/* <Route component={Four04}></Route> */}
      </Switch>
      <ItemList />
      <Footer />
    </Router>
  );
}

export default App;
