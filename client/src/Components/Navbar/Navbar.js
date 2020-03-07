import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Search from "../Search/Search";

function Navbar() {
  return (
    <div className="navBar">
      <h1 className="logo">Larry's List</h1>
      <Search />
      <div className="page-links">
        <a href="../../pages/About">Home</a>
        <a href="../../pages/Favorite">Saved</a>
      </div>
    </div>
  );
}

// const Navbar = props => {
//   <nav className="navbar navbar-default">
//     <div className="container-fluid">
//       <div className="navbar-header">
//         <Link className="navbar-brand" to="/">
//           LarryList
//         </Link>
//       </div>
//       <ul className="nav navbar-nav">
//         <li
//           className={
//             window.location.pathname === "/" ||
//             window.location.pathname === "/about"
//               ? "active"
//               : ""
//           }
//         >
//           <Link to="/">About</Link>
//         </li>
//         <li
//           className={window.location.pathname === "/category" ? "active" : ""}
//         >
//           <Link to="/category">Category</Link>
//         </li>
//         <li className={window.location.pathname === "/search" ? "active" : ""}>
//           <Link to="/search">Search</Link>
//         </li>
//         <li
//           className={window.location.pathname === "/favorite" ? "active" : ""}
//         >
//           <Link to="/favorite">Favorite</Link>
//         </li>
//       </ul>
//     </div>
//   </nav>;
// };

export default Navbar;
