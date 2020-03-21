import React from "react";
import "./header.css";
import Navbar from "../Navbar/Navbar";

function Header(props) {
  console.log(props.user)
  return (
    <div className="jumbotron jumbotron-fluid" id="header">
      <div className="container">
        <h1 className="display-4">LarrysList</h1>
        <Navbar user={props.user}/>
        <p className="lead"></p>
      </div>
    </div>
  );
}
export default Header;
