import { combineReducers } from 'redux';

import MoviesReducer from './Movies/Movies-Reducer';

export default combineReducers({
  MoviesReducer: MoviesReducer,
});
