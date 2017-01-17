import { combineReducers } from 'redux';

import categoryReducers from './modules/categories/reducers'

// Combine Reducers
let reducers = combineReducers({
  categoryState: categoryReducers
});

export default reducers;