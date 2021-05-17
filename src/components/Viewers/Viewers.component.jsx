import React from 'react';
import './Viewers.styles.scss';

import view1 from '../../Assets/images/viewers-disney.png';
import view2 from '../../Assets/images/viewers-marvel.png';
import view3 from '../../Assets/images/viewers-national.png';
import view4 from '../../Assets/images/viewers-pixar.png';
import view5 from '../../Assets/images/viewers-starwars.png';

import disney from '../../Assets/videos/1564674844-disney.mp4';
import marvel from '../../Assets/videos/1564676115-marvel.mp4';
import natgeo from '../../Assets/videos/1564676296-national-geographic.mp4';
import pixar from '../../Assets/videos/1564676714-pixar.mp4';
import starwars from '../../Assets/videos/1608229455-star-wars.mp4';

const Viewers = () => {
  return (
    <div className='viewers-container'>
      <div className='viewers-wrapper'>
        <img src={view1} alt='' />
        <video autoPlay muted loop playsInline>
          <source src={disney} type='video/mp4' />
        </video>
      </div>
      <div className='viewers-wrapper'>
        <img src={view2} alt='' />
        <video autoPlay muted loop playsInline>
          <source src={marvel} type='video/mp4' />
        </video>
      </div>
      <div className='viewers-wrapper'>
        <img src={view3} alt='' />
        <video autoPlay muted loop playsInline>
          <source src={natgeo} type='video/mp4' />
        </video>
      </div>
      <div className='viewers-wrapper'>
        <img src={view4} alt='' />
        <video autoPlay muted loop playsInline>
          <source src={pixar} type='video/mp4' />
        </video>
      </div>
      <div className='viewers-wrapper'>
        <img src={view5} alt='' />
        <video autoPlay muted loop playsInline>
          <source src={starwars} type='video/mp4' />
        </video>
      </div>
    </div>
  );
};

export default Viewers;
