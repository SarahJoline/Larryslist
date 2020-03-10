import React from "react";
import "./header.css";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid" id="header">
      <div className="container">
        <h1 className="display-4">LarrysList</h1>
        <Navbar />
        <p className="lead"></p>
      </div>
    </div>
  );
}
export default Header;
