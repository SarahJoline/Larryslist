import React from "react"
import {Link} from "react-router-dom"
import "./Navbar.css "

const Navbar = props => {
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/">
                    LarryList
                </Link>
            </div>
            <ul className="nav navbar-nav">
                <li className={
                    window.location.pathname ==='/' ||
                    window.location.pathname === '/about'
                    ? "active"
                    :""
                    }
                >
                    <Link to="/">Home</Link>
                </li>
                {/* <li 
                     className={window.location.pathname === "/category" ? "active" : ""}
                >
                     <Link to="/category">Category</Link>
                     </li> */}
                <li 
                     className={window.location.pathname === "/search" ? "active" : ""}
                >
                     <Link to="/search">Search</Link>
                     </li>
                <li 
                     className={window.location.pathname === "/favorite" ? "active" : ""}
                > 
                     <Link to="/favorite">Favorite</Link>
                 </li>
            </ul>
        </div>
    </nav>
}

export default Navbar