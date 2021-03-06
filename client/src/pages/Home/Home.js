// import { Component } from "react-router-dom"
import React, { Component } from "react";

import Autocomplete from "../../Components/Autocomplete/Autocomplete";
import Carousel from "../../Components/Carousel/Carousel";
import Categories from "../../Components/Categories/Categories";
import Display from "../../Components/Display/Display";
import PostForm from "../../Components/PostForm/PostForm";
import SearchForm from "../../Components/SearchForm/SearchForm";

import "./Home.css";

const categories = ["Car", "Pet", "Jobs", "Housing"];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      displayData: [
        {
          title: "CAT!",
          description: "I like cats",
          category: "Pets",
          image: "NOOOOOOOOOOOOOOOOOO",
        },
        {
          title: "DOG!",
          description: "I like dogs, kinda",
          category: "Cars",
          image: "NOOOOOOOOOOOOOOOOOO",
        },
        {
          title: "CHICKENS!",
          description: "Colin LOVES chickens",
          category: "Missed Connections",
          image: "It's a little weird",
        },
      ],
    };
    this.normalizeData = (rawData) => {
      return rawData.map(function (title, index) {
        return {
          title: title,
          image: "k", //rawData[index],
        };
      });
    };

    this.addNewResult = (queryResult) => {
      if (queryResult === null) {
        this.setState({ data: [] });
        return;
      }
      console.log(queryResult);
      const dummyData = [{ title: "Thanks friend!", image: "Image link here" }];
      const searchResult = this.normalizeData(dummyData);
      this.setState({ data: searchResult });
    };
  }
  render() {
    return (
      // <p>Home</p>
      <div className="homePage">
        {/* <PostForm /> */}
        <div className="homeSearch">
          <SearchForm onInput={this.addNewResult} />
        </div>
        <div className="carouselContainer">
          <Carousel />
        </div>
        {/* <Autocomplete data={this.state.data} /> */}
        {/* <Categories /> */}
        {/* <Display items={this.state.displayData} /> */}
      </div>
    );
  }
}

export default Home;
