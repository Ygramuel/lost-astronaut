import React from "react";

// https://github.com/leandrowd/react-responsive-carousel
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// import style from "./Slider.module.less"

class SimpleSlider extends React.Component {
  render() {
    return (
      <Carousel dynamicHeight={false} autoPlay={true}>
        {this.props.children}
      </Carousel>
    );
  }
}

export default SimpleSlider;
