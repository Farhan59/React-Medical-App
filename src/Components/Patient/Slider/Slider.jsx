import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const residences = [
  {
    id: 1,
    image: '/path/to/image1.jpg',
    price: 47043,
    name: 'Aliva Priva Jardin',
    location: 'Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta'
  },
  {
    id: 2,
    image: '/path/to/image2.jpg',
    price: 66353,
    name: 'Asatti Garden City',
    location: 'Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat'
  },
  {
    id: 3,
    image: '/path/to/image3.jpg',
    price: 35853,
    name: 'Citralan Puri Serang',
    location: 'Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten'
  },
  // Add more residences as needed
];

const ResidenceSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slider-container">
      <h3 className="slider-subtitle">Best Choices</h3>
      <h2 className="slider-title">Popular Residencies</h2>
      <Slider {...settings}>
        {residences.map((residence) => (
          <div key={residence.id} className="slider-item">
            <img src={residence.image} alt={residence.name} className="slider-image" />
            <div className="slider-content">
              <span className="slider-price">${residence.price.toLocaleString()}</span>
              <h3 className="slider-name">{residence.name}</h3>
              <p className="slider-location">{residence.location}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightgray" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightgray" }}
      onClick={onClick}
    />
  );
};

export default ResidenceSlider;