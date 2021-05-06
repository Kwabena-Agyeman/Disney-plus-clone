import { SET_MOVIES } from './Movies-Constants';

const InitialState = {
  movies: null,
};

const MoviesReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default MoviesReducer;
