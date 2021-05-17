import React from 'react';
import './Login-page.styles.scss';

import CTA1 from '../../Assets/images/cta-logo-one.svg';
import CTA2 from '../../Assets/images/cta-logo-two.png';

const LoginPage = () => {
  return (
    <div className='Login-container'>
      <div className='CTA-box'>
        <img src={CTA1} alt='' className='cta-logo-one' />
        <a className='cta-link' href='#'>
          AVALIABLE ON DISNEY PLUS
        </a>
        <div className='cta-description'>
          <p>
            With Disney Plus, you can watch thousands of Disney movies, TV series & Live Sports on your smart devices
            and gaming consoles . The service includes unlimited downloads so you can watch anywhere, anytime.
          </p>
        </div>
        <img src={CTA2} alt='' className='cta-logo-two' />
      </div>
    </div>
  );
};

export default LoginPage;
