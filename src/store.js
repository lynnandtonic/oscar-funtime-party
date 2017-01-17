import { createStore } from 'redux';
import reducers from './rootReducer';

const store = createStore(reducers);
export default store;