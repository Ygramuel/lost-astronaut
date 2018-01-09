import React from "react";

// import Slider from 'react-slick'

//import "slick-carousel/slick/slick.css"
//import "slick-carousel/slick/slick-theme.css"

import style from "./Slider.module.less"

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>TODO. This should be the slider</div>
      /*<Slider className={style.slider} {...settings}>
        {this.props.children}
      </Slider>*/
    );
  }
}

export default SimpleSlider;
