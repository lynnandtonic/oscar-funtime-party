import { combineReducers } from 'redux';

import categoryReducers from './modules/categories/reducers'
import nomineeReducers from './modules/nominees/reducers'
import userReducers from "./modules/user/reducers";

// Combine Reducers
let reducers = combineReducers({
  categoryState: categoryReducers,
  nomineeState: nomineeReducers,
  userState: userReducers
});

export default reducers;
