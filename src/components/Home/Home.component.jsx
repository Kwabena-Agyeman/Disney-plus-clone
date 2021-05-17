import React, { useEffect } from 'react';
import ImageSlider from '../Image-slider/Image-Slider.component';
import Viewers from '../Viewers/Viewers.component';
import Movies from '../Movies/Movies.component';

import { connect } from 'react-redux';
import { setMovies } from '../../Redux/Movies/Movies-Actions';
import { Redirect } from 'react-router-dom';

import db from '../../Firebase';

import './home.styles.scss';

const Home = (props) => {
  const { setMovies, user } = props;

  useEffect(() => {
    db.collection('movies').onSnapshot(async (snapShot) => {
      let tempMovies = await snapShot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      await setMovies(tempMovies);
    });
  }, []);

  if (user === null) {
    return <Redirect to='/login' />;
  } else {
    return (
      <main className='home-container'>
        <ImageSlider />
        <Viewers />
        <Movies />
      </main>
    );
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    setMovies: (movies) => {
      dispatch(setMovies(movies), console.log(movies));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
