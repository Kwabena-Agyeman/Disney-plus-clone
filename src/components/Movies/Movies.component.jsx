import React from 'react';
import './Movies.styles.scss';
import { connect } from 'react-redux';
import Gif from '../../Assets/images/loading.gif';

const Movies = (props) => {
  const { movies } = props;
  return (
    <div className='movie-container'>
      <h2>Recommended for You</h2>

      {movies ? (
        <div className='movie-content'>
          {movies.map((movie) => {
            return (
              <div key={movie.id} className='movie-wrapper'>
                <img src={movie.cardImg} alt='' />
              </div>
            );
          })}
        </div>
      ) : (
        <img src={Gif}></img>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.MoviesReducer.movies,
  };
};

export default connect(mapStateToProps, null)(Movies);
