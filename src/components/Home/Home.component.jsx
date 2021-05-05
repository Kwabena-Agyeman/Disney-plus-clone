import React from 'react';
import ImageSlider from '../Image-slider/Image-Slider.component';
import Viewers from '../Viewers/Viewers.component';

import './home.styles.scss';

const Home = () => {
  return (
    <main className='home-container'>
      <ImageSlider />
      <Viewers />
    </main>
  );
};

export default Home;
