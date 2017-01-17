import * as types from '../actions/types';

const initialState = {
  categories: []
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.CATEGORY_WAS_FETCHED:
      return { ...state, categories: [...state.categories, action.payload] };

    default:
      return state;

  }

};

export default userReducer;