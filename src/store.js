import { applyMiddleware, createStore } from 'redux';
import reducers from './rootReducer';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { getCategories } from './modules/categories/api';
import { getNominees } from './modules/nominees/api';
import { initializeDatasource } from './config';

initializeDatasource();

const loggerMiddleware = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(
    loggerMiddleware,
    thunkMiddleware
  )
);

store.dispatch(getCategories());
store.dispatch(getNominees());

export default store;