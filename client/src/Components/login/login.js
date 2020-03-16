import React, { Component } from 'react'
import "./Login.css"
 class login extends Component {
     constructor(){
         super()
         
          this.state ={
              username: '',
              password: '',
              redirectTo: null
          }
     }
    //  handleChange =(e)=>{
    //      this.setState({
    //          [event.target.name]:event.target.value
    //      });
    //  }

    render() {
        return (
            <div>
                 <main>
        <h2>Form Inputs</h2>
        <form className="form">
            <div className="group">
                <input 
                    type="text" 
                    name="text" 
                    className="text input"
                    autoComplete="off"
                    placeholder="Name/Email"
                    autoFocus
                />
                <label htmlFor="text" className="border">
                    <span className="text">
                    </span>
                </label>
            </div>
            <div className="group">
                <input 
                    type="text" 
                    name="password" 
                    className="password input"
                    autoComplete="off"
                    placeholder="password"
                    autoFocus
                />
                <label htmlFor="password" className="border">
                    <span className="password">
                    </span>
                </label>
            </div>

        </form>
    </main>
            </div>
        )
    }
}

export default login