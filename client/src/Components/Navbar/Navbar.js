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
console.log("navbar",props.user);

  return (
    <div className="Wrapper">
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <button>
          <Link to="/home">Home</Link>
        </button>

        <button>
          <Link to="/allpostings">All Postings</Link>
        </button>

        <button>
          <Link to="/favorite">Favorite</Link>
        </button>
        {props.user[0]? 
        <>
        { props.user[0]._id ?
        (<>
        <button
          onClick={() => {
            logOutCallback();
          }}
        >
          <Link to="/"> log Out</Link>
        </button>
        <button
        >
          <Link to="/post">post item</Link>
        </button>
        </>
        ) : (
        <>
        {path == "/login" ? (
          ""
        ) : (
            <button>
              <Link to="/">Login</Link>
            </button>
          )}
        {path == "/signUp" ? (
          ""
        ) : (

          <button>
            <Link to="/signUp">SignUp</Link>
          </button>
        )}
        </>
        )
        }</>:<></>
        }

      </div>
    </div>
  );
}

export default Navbar;
