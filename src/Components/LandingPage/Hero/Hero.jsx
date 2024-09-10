import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  

  };

  return (
    <div className="hero">
      <Slider {...settings}>
        <div>
          <img src="/images/image0.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/image1.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/images/image2.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
