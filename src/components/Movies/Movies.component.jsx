import React from 'react';
import './Movies.styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Gif from '../../Assets/images/loading.gif';

const Movies = (props) => {
  const { movies } = props;
  return (
    <div className='movie-container'>
      <h2 className='movies-header'>Recommended For You</h2>

      {movies ? (
        <div className='movie-content'>
          {movies.map((movie) => {
            return (
              <Link key={movie.id} to={`/detail/${movie.id}`}>
                <div className='movie-wrapper'>
                  <img src={movie.cardImg} alt='movie' />
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <img src={Gif} alt='loading spinner'></img>
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
