import React, { Component } from 'react'

 class login extends Component {
     constructor(){
         super()
         
          this.state ={
              username: '',
              password: '',
              redirectTo: null
          }
     }
     handleChange =(e)=>{
         this.setState({
             [event.target.name]:event.target.value
         });
     }



    render() {
        return (
            <div>
                Login
            </div>
        )
    }
}

export default login