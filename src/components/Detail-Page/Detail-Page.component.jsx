import React, { useState, useEffect } from 'react';
import playBtn from '../../Assets/images/play-icon-black.png';
import trailerBtn from '../../Assets/images/play-icon-white.png';
import groupWatch from '../../Assets/images/group-icon.png';

import { useParams } from 'react-router-dom';
import db from '../../Firebase.js';

import './Detail-Page.styles.scss';

export const DetailPage = (props) => {
  const [movie, setMovie] = useState({});
  console.log(props);

  const { id } = useParams();

  useEffect(() => {
    db.doc(`movies/${id}`).onSnapshot(async (Snapshot) => {
      await setMovie(Snapshot.data());
      console.log(movie);
    });
  }, []);

  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('${movie.backgroundImg}') no-repeat center
      center/cover fixed`,
      }}
      className='DetailPage-container'
    >
      <div className='Image-title'>
        <img src={movie.titleImg} alt='' />
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
      <div className='subtitle'>{movie.subTitle}</div>
      <div className='description'>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default DetailPage;
