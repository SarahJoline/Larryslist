import React, { Component } from "react";
import axios from "axios";
import "./searchform.css";

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
          this.props.onInput(data);
        });
    };
  }
  render() {
    return (
      <div>
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

          <button className="btn btn-outline-success ml-2"> Enter </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
