import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

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
    window.localStorage.setItem("token", "");
    window.location.reload(true);
    props.history.push("/");
  };

  console.log("navbar", props.user);
  return (
    <div className="Wrapper">
      <div
        id="navbar"
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        {props.user[0] ? (
          <>
            {props.user[0]._id ? (
              <>
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
                    <Link
                      to="/"
                      className="labelNav"
                      onClick={() => {
                        logOutCallback();
                      }}
                    >
                      log Out
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
              </>
            ) : (
              <>
                <div className="button">
                  <div className="bottom"></div>
                  <div className="top">
                    {path == "/login" ? (
                      ""
                    ) : (
                      <Link to="/" className="labelNav">
                        Login
                      </Link>
                    )}
                    <div className="button-border button-border-left"></div>
                    <div className="button-border button-border-top"></div>
                    <div className="button-border button-border-right"></div>
                    <div className="button-border button-border-bottom"></div>
                  </div>
                </div>
                <div className="button">
                  <div className="bottom"></div>
                  <div className="top">
                    {path == "/signUp" ? (
                      ""
                    ) : (
                      <Link to="/signUp" className="labelNav">
                        SignUp
                      </Link>
                    )}
                    <div className="button-border button-border-left"></div>
                    <div className="button-border button-border-top"></div>
                    <div className="button-border button-border-right"></div>
                    <div className="button-border button-border-bottom"></div>
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
