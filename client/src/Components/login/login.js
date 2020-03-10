import React, { Component } from 'react'
import "./login.css"
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
        <form class="form">
            <div class="group">
                <input 
                    type="text" 
                    name="text" 
                    class="text input"
                    autocomplete="off"
                    placeholder="Name/Email"
                    autofocus
                />
                <label for="text" class="border">
                    <span class="text">
                    </span>
                </label>
            </div>
            <div class="group">
                <input 
                    type="text" 
                    name="password" 
                    class="password input"
                    autocomplete="off"
                    placeholder="password"
                    autofocus
                />
                <label for="password" class="border">
                    <span class="password">
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