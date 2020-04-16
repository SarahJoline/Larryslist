import { AuthContext } from "../../Context/AuthContext";
import AuthService from "../../Service/AuthService";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "./postform.css";

// import user from "../Login/Login";

function PostForm(props) {
  const { register, handleSubmit } = useForm();
  //const onSubmit = data => console.log(data);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AuthService.isAuthenticated().then((data) => {
      setUser(data.user);
      console.log(data.user);
      setIsAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
    });
  }, []);

  const onSubmit = (data) => {
    axios
      .post("/api/newpost", {
        category: data.category,
        title: data.title,
        description: data.description,
        userId: user.username,
      })
      .then((response) => console.log(response));
    props.history.push("/allpostings");
  };

  return (
    <div className="form-parent">
      <form className="test" onSubmit={handleSubmit(onSubmit)}>
        <label> Posting Title:</label>
        <input className="post-inputs" name="title" ref={register} />
        <label>Posting Description:</label>
        <input className="description" name="description" ref={register} />
        <label>Posting Category:</label>
        <select className="select-category" name="category" ref={register}>
          <option value="">Select One</option>
          <option value="cars">Cars</option>
          <option value="jobs">Jobs</option>
          <option value="pets">Pets</option>
          <option value="housing">Housing</option>
          <option value="connect">Missied Connections</option>
        </select>
        <br />
        <input className="submit-button" type="submit" />
      </form>
    </div>
  );
}

export default PostForm;
