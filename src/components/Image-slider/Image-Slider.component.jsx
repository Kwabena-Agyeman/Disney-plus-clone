import React from 'react';
import './Image-Slider.styles.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slider1 from '../../Assets/images/slider-badging.jpg';
import slider2 from '../../Assets/images/slider-badag.jpg';
import slider3 from '../../Assets/images/slider-scale.jpg';
import slider4 from '../../Assets/images/slider-scales.jpg';

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider className='slider' {...settings}>
      <div className='wrapper'>
        <img src={slider1} alt='' />
      </div>
      <div className='wrapper'>
        <img src={slider3} alt='' />
      </div>
      <div className='wrapper'>
        <img src={slider2} alt='' />
      </div>
      <div className='wrapper'>
        <img src={slider4} alt='' />
      </div>
    </Slider>
  );
};

export default ImageSlider;
