import {Link, useLocation} from 'react-router-dom'
import "./Navbar.css"
import React from 'react'
function Navbar(){
        let path=useLocation().pathname
        console.log("path", path)
        return (
            <div className="Wrapper">
                <div className="navbar navbar-expand-lg navbar-light bg-light">
               <button>
                   <Link to='/'>Home</Link>
               </button>
               {/* <input type="text" placeholder="Search LarryList">
               </input> */}
               {/* <button>

                   <Link to='/Search'>Search</Link>
               </button> */}
               <button>
                   <Link to='/favorite'>Favorite</Link>
               </button>
              {path=="/login"? "" :<button>
                   <Link to='/login'>Login</Link>
               </button>}
               {path=="/signUp"?"":<button>
                   <Link to='/signUp'>SignUp</Link>
               </button>}
           
               </div>
            </div>
           
        )
}

export default Navbar