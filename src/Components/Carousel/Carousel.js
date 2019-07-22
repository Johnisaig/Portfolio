import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class Carousel extends Component {

    constructor(props){
        super(props);
        this.state = {
            stagePadding: [
                {
                paddingRight: 0,
                paddingLeft: 0
                    }
            ]
        }
    }

    render() {
    const handleOnDragStart = e => e.preventDefault()
        return (
            <div>
                <AliceCarousel 
                   duration={1000}
                   fadeOutAnimation={true}
                   mouseDragEnabled={true}
                   onSlideChanged={console.debug}
                   infinite={true}
                   responsive={this.responsive}
                   stagePadding={this.stagePadding}
                   autoPlayInterval={1000}
                   autoPlayDirection="rtl"
                   autoPlay={true}
                   playButtonEnabled={false}
                   disableAutoPlayOnAction={false}
                    
                >
                </AliceCarousel>
            </div>
        );
    }
}

export default Carousel;