import React, { Component } from "react";
import "./signUp.css";
import API from "../../Components/utility/API";

class SignUp extends Component {
  state = {
    user: "",
    password: "",
  
  };

//   handleFormSubmit = event => {
//     event.preventDefault();

//     API.register({
//       user: this.state.user,
//       password: this.state.password,
//       : this.state."",
//       : this.state.""
//     }).then(res =>
//       this.setState({
//         user: "",
//         password: "",
//       })
//     );
//     window.location.assign("/");
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

  render() {
    return (
      <div className="container">
        <h2>SignUp</h2>
        <form>
          <div className="form-group">
            <label>Email or User Name</label>
            <input
              type="string"
              className="form-control"
              id="newEmail"
              placeholder="Enter email or user name"
              name="user"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="*******"
              name="password"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="*******"
              name="password"
              onChange={this.handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-info"
            onClick={this.handleFormSubmit}
          >
            SignUp
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
