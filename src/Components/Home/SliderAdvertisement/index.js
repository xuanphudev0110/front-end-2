import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, CardMedia } from "@material-ui/core";
import banner1 from "../../../Files/Images/banner.jpg";
import banner2 from "../../../Files/Images/banner1.jpg";
import banner3 from "../../../Files/Images/banner2.jpg";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  dotsClass: "button__bar"
};

function SliderAdvertisement() {
  return (
    <Box my={2}>
      <Slider {...settings} style={{ width: "100%" }}>
        <div className="slider-slick-main">
          <CardMedia component="img" image={banner1} />
        </div>
        <div className="slider-slick-main">
          <CardMedia component="img" image={banner2} />
        </div>
        <div className="slider-slick-main">
          <CardMedia component="img" image={banner3} />
        </div>
      </Slider>
    </Box>
  );
}

export default SliderAdvertisement;
