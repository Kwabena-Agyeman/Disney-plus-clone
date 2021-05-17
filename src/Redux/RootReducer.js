import { combineReducers } from 'redux';

import MoviesReducer from './Movies/Movies-Reducer';
import UserReducer from './User/User.Reducer';

export default combineReducers({
  MoviesReducer: MoviesReducer,
  UserReducer: UserReducer,
});
