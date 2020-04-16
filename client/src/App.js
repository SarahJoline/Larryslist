import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Categories from "./Components/Categories/Categories";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import NewPost from "./Components/NewPost/NewPost";
import PostForm from "./Components/PostForm/PostForm";
import AllPostings from "./pages/AllPostings/AllPostings";
import Detail from "./pages/Detail/Detail";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";
import Register from "./pages/SignUp/SignUp";

import "./App.css";

export const UserContext = React.createContext([]);

function App(props) {
  return (
    <Router>
      <div>
        <div className="backGround">
          <Header />
          <Route exact path="/home" component={Home} />
          <Route exact path="/allpostings" component={AllPostings} />
          <Route exact path="/" component={Login} />
          <Route exact path="/Favorite" component={Favorite} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cats" component={Categories} />
          <Route exact path="/newPost" component={NewPost} />
          <Route exact path="/post" component={PostForm} />
          <Route path="/detail/:id" component={Detail} />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
