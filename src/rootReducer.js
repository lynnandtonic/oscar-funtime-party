import { combineReducers } from 'redux';

import categoryReducers from './modules/categories/reducers'
import nomineeReducers from './modules/nominees/reducers'

// Combine Reducers
let reducers = combineReducers({
  categoryState: categoryReducers,
  nomineeState: nomineeReducers
});

export default reducers;