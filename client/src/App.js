import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Search from "./pages/Search/Search";
import Category from "./pages/Category/Category";
import Favorite from "./pages/Favorite/Favorite";
import About from "./pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import  Footer from "./Components/Footer/Footer";
import  Wrapper from "./Components/Wrapper/Wrapper";
import "./App.css";

function App() {
  return (
   <Router>
     <div>
       <Navbar/>
       <Wrapper>
       <Route exact path="/" component={About}></Route> 
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/category" component={Category}></Route>
          <Route exact path="/favorite" component={Favorite}></Route>
          <Route  component={Four04}></Route>
       </Wrapper>  
       <Footer/>
     </div>
   </Router>
  );
}

export default App;
