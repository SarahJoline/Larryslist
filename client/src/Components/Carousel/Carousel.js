import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
class myCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div className="carouselImg">
          <img
            src="https://cdn.britannica.com/67/197567-131-1645A26E/Scottish-fold-cat-feline.jpg"
            alt=""
          />
          <p className="legend">popular post 1</p>
        </div>
        <div className="carouselImg">
          <img
            src="https://artcityvets.com/wp-content/uploads/2019/03/animal-sitting-animals-inside.jpg"
            alt=""
          />
          <p className="legend">popular post 2</p>
        </div>
        <div className="carouselImg">
          <img
            src="https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2018-09/meow_2.jpg"
            alt=""
          />
          <p className="legend">popular post 3</p>
        </div>
      </Carousel>
    );
  }
}
export default myCarousel;

// ReactDOM.render(<Carousel />, document.querySelector('.demo-carousel'));
