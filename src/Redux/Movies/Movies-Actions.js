import { SET_MOVIES } from './Movies-Constants';

export const setMovies = (movies) => {
  return {
    type: SET_MOVIES,
    payload: movies,
  };
};
