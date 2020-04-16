import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";

import { AuthContext } from "../../Context/AuthContext";
import AuthService from "../../Service/AuthService";

import "./Navbar.css";

const Navbar = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      console.log(data);
      if (!data) {
        setUser(data);
        setIsAuthenticated(false);
      }
      props.history.push("/");
    });
  };

  const unauthenticatedNavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <div className="navbar1"> */}
            <div className="button">
              <div className="bottom"></div>
              <div className="top">
                <Link to="/" className="labelNav">
                  Login
                </Link>
                <div className="button-border button-border-left"></div>
                <div className="button-border button-border-top"></div>
                <div className="button-border button-border-right"></div>
                <div className="button-border button-border-bottom"></div>
              </div>
            </div>
            <div className="button">
              <div className="bottom"></div>
              <div className="top">
                <Link to="/register" className="labelNav">
                  Register
                </Link>
                <div className="button-border button-border-left"></div>
                <div className="button-border button-border-top"></div>
                <div className="button-border button-border-right"></div>
                <div className="button-border button-border-bottom"></div>
              </div>
            </div>
            {/* </div> */}
          </ul>
        </div>
      </nav>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <div className="button">
              <div className="bottom"></div>
              <div className="top">
                <Link to="/home" className="labelNav">
                  Home
                </Link>
                <div className="button-border button-border-left"></div>
                <div className="button-border button-border-top"></div>
                <div className="button-border button-border-right"></div>
                <div className="button-border button-border-bottom"></div>
              </div>
            </div>
            <div className="button">
              <div className="bottom"></div>
              <div className="top">
                <Link to="/allpostings" className="labelNav">
                  All Postings
                </Link>
                <div className="button-border button-border-left"></div>
                <div className="button-border button-border-top"></div>
                <div className="button-border button-border-right"></div>
                <div className="button-border button-border-bottom"></div>
              </div>
            </div>
            <div className="button">
              <div className="bottom"></div>
              <div className="top">
                <Link to="/favorite" className="labelNav">
                  Favorite
                </Link>
                <div className="button-border button-border-left"></div>
                <div className="button-border button-border-top"></div>
                <div className="button-border button-border-right"></div>
                <div className="button-border button-border-bottom"></div>
              </div>
            </div>
            <div className="button">
              <div className="bottom"></div>
              <div className="top">
                <Link to="/post" className="labelNav">
                  post item
                </Link>
                <div className="button-border button-border-left"></div>
                <div className="button-border button-border-top"></div>
                <div className="button-border button-border-right"></div>
                <div className="button-border button-border-bottom"></div>
              </div>
            </div>
            <div className="button">
              <div className="bottom"></div>
              <div className="top">
                <Link className="labelNav" onClick={onClickLogoutHandler}>
                  Logout
                </Link>
                <div className="button-border button-border-left"></div>
                <div className="button-border button-border-top"></div>
                <div className="button-border button-border-right"></div>
                <div className="button-border button-border-bottom"></div>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    );
  };
  return (
    <div className="Wrapper">
      {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
    </div>
  );
};

export default withRouter(Navbar);
