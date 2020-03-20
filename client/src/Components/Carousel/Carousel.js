import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Carousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://cdn.britannica.com/67/197567-131-1645A26E/Scottish-fold-cat-feline.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://artcityvets.com/wp-content/uploads/2019/03/animal-sitting-animals-inside.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2018-09/meow_2.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
export default Carousel

// ReactDOM.render(<Carousel />, document.querySelector('.demo-carousel'));