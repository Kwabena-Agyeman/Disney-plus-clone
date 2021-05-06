import React from 'react';
import movieLogo from '../../Assets/images/viewers-starwars.png';
import playBtn from '../../Assets/images/play-icon-black.png';
import trailerBtn from '../../Assets/images/play-icon-white.png';
import groupWatch from '../../Assets/images/group-icon.png';

import './Detail-Page.styles.scss';

const DetailPage = () => {
  return (
    <div className='DetailPage-container'>
      <div className='Image-title'>
        <img src={movieLogo} alt='' />
      </div>
      <div className='movie-controls'>
        <button className='play'>
          <img src={playBtn} alt='' />
          <span>PLAY</span>
        </button>
        <button className='trailer'>
          <img src={trailerBtn} alt='' />
          <span>TRAILER</span>
        </button>
        <button className='add'>
          <span>+</span>
        </button>
        <button className='group-watch'>
          <img src={groupWatch} alt='' />
        </button>
      </div>
      <div className='subtitle'>2018 . 160m . Sci-Fi, Fantasy, Action, Thriller</div>
      <div className='description'>
        <p>
          The Star Wars franchise depicts the adventures of characters "A long time ago in a galaxy far, far away", in
          which humans and many species of aliens (often humanoid) co-exist with robots, or 'droids', who may assist
          them in their daily routines; space travel between planets is common due to lightspeed hyperspace
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
