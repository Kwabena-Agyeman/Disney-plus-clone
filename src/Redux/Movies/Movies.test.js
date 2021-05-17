import MoviesReducer from './Movies-Reducer';
import { setMovies } from './Movies-Actions';
import { SET_MOVIES } from './Movies-Constants';

describe('Testing Movies Reducer', () => {
  const InitialState = {
    movies: null,
  };

  test('Intial State is rendered', () => {
    expect(MoviesReducer(undefined, {})).toEqual({
      movies: null,
    });
  });
  test('Setting Movies', () => {
    expect(
      MoviesReducer(InitialState, {
        type: SET_MOVIES,
        payload: { movies: 'movies' },
      })
    ).toEqual({
      movies: { movies: 'movies' },
    });
  });
});

describe('Testing Movies Action', () => {
  test('setMovies action returns correct action object', () => {
    const movies = ['marvel', 'disney', 'pixar'];
    expect(setMovies(movies)).toEqual({
      type: SET_MOVIES,
      payload: movies,
    });
  });
});
