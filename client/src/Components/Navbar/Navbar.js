
import { Link } from "react-router-dom";
import "./Navbar.css";
import React, { Component } from "react";
class navbar extends Component {
  render() {
    return (
      <div className="Wrapper">
        <div className="navbar">
          <Link to="/" className="page-buttons">
            Home
          </Link>

          <Link to="/Search" className="page-buttons">
            Search
          </Link>

          <Link to="/Favorite" className="page-buttons">
            Favorite
          </Link>

          <Link to="/Login" className="page-buttons">
            Login
          </Link>

          <Link to="/SignUp" className="page-buttons">
            SignUp
          </Link>
        </div>
      </div>
    );
  }
}

export default navbar;
