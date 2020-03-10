import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import  Footer from "./Components/Footer/Footer";
import "./App.css";
import Login from "./Components/login/login"
import Header from "./Components/Header/Header"
import SignUp from"./pages/signUp/signUp"
//import Category from"./Components/category/category"

function App() {
  return (
   <Router>
     <div>
       <Header/>
      <Navbar/>
       <Switch> 
        {/* <Category/> */}

       <Route exact path="/" component={Home}></Route> 
          <Route exact path="/home" component={Home}></Route>
          {/* <Route exact path="/search" component={Search}></Route>  */}
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/favorite" component={Favorite}></Route>
          <Route exact path="/signUp" component={SignUp}></Route> 
         {/* <Route  component={Four04}></Route> */}
        
       </Switch>
       <Footer/>
     </div>
   </Router>
  );
}

export default App;
