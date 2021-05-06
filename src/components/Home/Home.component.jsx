import React, { useEffect } from 'react';
import ImageSlider from '../Image-slider/Image-Slider.component';
import Viewers from '../Viewers/Viewers.component';
import Movies from '../Movies/Movies.component';

import { connect } from 'react-redux';
import { setMovies } from '../../Redux/Movies/Movies-Actions';

import db from '../../Firebase';

import './home.styles.scss';

const Home = (props) => {
  const { setMovies } = props;
  useEffect(() => {
    db.collection('movies').onSnapshot((snapShot) => {
      let tempMovies = snapShot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setMovies(tempMovies);
    });
  }, []);

  return (
    <main className='home-container'>
      <ImageSlider />
      <Viewers />
      <Movies />
    </main>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMovies: (movies) => {
      dispatch(setMovies(movies), console.log(movies));
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);
