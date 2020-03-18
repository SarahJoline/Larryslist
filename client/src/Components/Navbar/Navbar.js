import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

class navbar extends Component {
  render() {
    return (
      <div className="Wrapper">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/Favorite">Favorite</Link>
          </button>
          <button>
            <Link to="/Login">Login</Link>
          </button>
          <button>
            <Link to="/SignUp">SignUp</Link>
          </button>
          <button>
            <Link to="/newPost">Add a post</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default navbar;
