import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { navigate } from "@reach/router";
function Navbar(props) {
  let path = useLocation().pathname;
  console.log("path", path);
  const logOutCallback = async () => {
    await fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include" // Needed to include the cookie
    });
    // Clear user from context
    // setUser({});
    // Navigate back to startpage
    navigate("/");
    window.localStorage.setItem("token", "");
  };
  // const returnJSX=()=>{
  //   return(
  //     {path == "/login" ? (
  //       ""
  //     ) : (
  //       <button>
  //         <Link to="/">Login</Link>
  //       </button>
  //     )}
  //     {path == "/signUp" ? (
  //       ""
  //     ) : (
  //       <button>
  //         <Link to="/signUp">SignUp</Link>
  //       </button>
  //     )}
  // )}
  console.log("navbar", props.user);
  return (
    <div className="Wrapper">
      <div
        id="navbar"
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div class="button">
          <div class="bottom"></div>
          <div class="top">
            <Link to="/home" className="label">
              Home
            </Link>
            <div class="button-border button-border-left"></div>
            <div class="button-border button-border-top"></div>
            <div class="button-border button-border-right"></div>
            <div class="button-border button-border-bottom"></div>
          </div>
        </div>
        <div class="button">
          <div class="bottom"></div>
          <div class="top">
            <Link to="/favorite" className="label">
              Favorite
            </Link>
            <div class="button-border button-border-left"></div>
            <div class="button-border button-border-top"></div>
            <div class="button-border button-border-right"></div>
            <div class="button-border button-border-bottom"></div>
          </div>
        </div>
        {props.user[0] ? (
          <>
            {props.user[0]._id ? (
              <>
                <div class="button">
                  <div class="bottom"></div>
                  <div class="top">
                    <Link
                      to="/"
                      className="label"
                      onClick={() => {
                        logOutCallback();
                      }}
                    >
                      {" "}
                      log Out
                    </Link>
                    <div class="button-border button-border-left"></div>
                    <div class="button-border button-border-top"></div>
                    <div class="button-border button-border-right"></div>
                    <div class="button-border button-border-bottom"></div>
                  </div>
                </div>
                <div class="button">
                  <div class="bottom"></div>
                  <div class="top">
                    <Link to="/post" className="label">
                      post item
                    </Link>
                    <div class="button-border button-border-left"></div>
                    <div class="button-border button-border-top"></div>
                    <div class="button-border button-border-right"></div>
                    <div class="button-border button-border-bottom"></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div class="button">
                  <div class="bottom"></div>
                  <div class="top">
                    {path == "/login" ? (
                      ""
                    ) : (
                      <Link to="/" className="label">
                        Login
                      </Link>
                    )}
                    <div class="button-border button-border-left"></div>
                    <div class="button-border button-border-top"></div>
                    <div class="button-border button-border-right"></div>
                    <div class="button-border button-border-bottom"></div>
                  </div>
                </div>
                <div class="button">
                  <div class="bottom"></div>
                  <div class="top">
                    {path == "/signUp" ? (
                      ""
                    ) : (
                      <Link to="/signUp" className="label">
                        SignUp
                      </Link>
                    )}
                    <div class="button-border button-border-left"></div>
                    <div class="button-border button-border-top"></div>
                    <div class="button-border button-border-right"></div>
                    <div class="button-border button-border-bottom"></div>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
export default Navbar;
