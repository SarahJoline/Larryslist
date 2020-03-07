import {Link} from 'react-router-dom'
import "./Navbar.css"
import React, { Component } from 'react'
 class navbar extends Component {

    render() {
        return (
            <div>
               <button>
                   
                   <Link to='/'>Home</Link>
               </button>
               <button>
                   <Link to='/Search'>Search</Link>
               </button>
               <button>
                   <Link to='/Favorite'>Favorite</Link>
               </button>
               <button>
                   <Link to='/Login'>Login</Link>
               </button>
            </div>
        )
    }
}

export default navbar