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
                   <Link to='/search'>Search</Link>
               </button>
               <button>
                   <Link to='/login'>Login</Link>
               </button>
               <button>
                   <Link to='/favorite'>Favorite</Link>
               </button>
            </div>
        )
    }
}

export default navbar