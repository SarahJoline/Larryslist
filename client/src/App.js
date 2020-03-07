import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import Favorite from "./pages/Favorite/Favorite";
import About from "./pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import  Footer from "./Components/Footer/Footer";
import  Wrapper from "./Components/Wrapper/Wrapper";
import "./App.css";
import Catagory from "./Components/category/category"

function App() {
  return (
   <Router>
     <div>
       {/* <Navbar/> */}
       <Switch> 
      
        {/* <Category/> */}

       <Route exact path="/" component={About}></Route> 
          <Route exact path="/about" component={About}></Route>
          {/* <Route exact path="/search" component={Search}></Route> */}
          {/* <Route exact path="/category" component={Category}></Route> */}
          <Route exact path="/favorite" component={Favorite}></Route>
          {/* <Route  component={Four04}></Route> */}
        
       </Switch>
       <Footer/>
     </div>
   </Router>
  );
}

export default App;
