import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './rootReducer';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { getCategories } from './modules/categories/api';
import { getNominees } from './modules/nominees/api';
import firebase, { auth, provider } from './firebase.js';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(
    loggerMiddleware,
    thunkMiddleware
  )
);

const store = createStore(
  reducers,
  enhancer
);

store.dispatch(getCategories());
store.dispatch(getNominees());

export default store;
