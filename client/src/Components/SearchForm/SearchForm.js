import React, { Component } from "react";
import axios from "axios";
import "./searchform.css";
import { addNewResult } from "../../pages/Home";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { querySearch: "" };
    this.handleSearch = event => {
      this.setState({ querySearch: event.target.value });
      axios
        .request({
          method: "GET",
          url: "/api/allPosts"
        })
        .then(data => {
          this.props.addNewResult(data);
        });
    };
  }
  render() {
    return (
      <form>
        <input
          style={{ margin: "10px 0px", width: "75%" }}
          value={this.state.querySearch}
          onChange={this.handleSearch}
          type="text"
          placeholder="Search here"
          required
        />
        <i className="fa fa-search" aria-hidden="true"></i>
      </form>
    );
  }
}

export default SearchForm;
