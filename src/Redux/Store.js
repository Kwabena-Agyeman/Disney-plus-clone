import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import thunk from 'redux-thunk';

import RootReducer from './RootReducer';

const middleware = [logger, thunk];

const store = createStore(RootReducer, applyMiddleware(...middleware));

export default store;
