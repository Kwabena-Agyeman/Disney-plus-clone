import React from 'react';
import './Viewers.styles.scss';

import view1 from '../../Assets/images/viewers-disney.png';
import view2 from '../../Assets/images/viewers-marvel.png';
import view3 from '../../Assets/images/viewers-national.png';
import view4 from '../../Assets/images/viewers-pixar.png';
import view5 from '../../Assets/images/viewers-starwars.png';

const Viewers = () => {
  return (
    <div className='viewers-container'>
      <div className='viewers-wrapper disney'>
        <img src={view1} alt='' />
      </div>
      <div className='viewers-wrapper'>
        <img src={view2} alt='' />
      </div>
      <div className='viewers-wrapper'>
        <img src={view3} alt='' />
      </div>
      <div className='viewers-wrapper'>
        <img src={view4} alt='' />
      </div>
      <div className='viewers-wrapper'>
        <img src={view5} alt='' />
      </div>
    </div>
  );
};

export default Viewers;
