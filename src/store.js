import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './rootReducer';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

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

export default store;
