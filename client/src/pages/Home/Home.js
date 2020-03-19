// import {Link} from "react-router-dom"
import React, { Component } from "react";
import SearchForm from "../../Components/SearchForm/SearchForm";
import { addNewResult } from "../../App";

class About extends Component {
  render(props) {
    return (
      <div>
        <SearchForm addNewResult={addNewResult} />
      </div>
    );
  }
}

export default About;
