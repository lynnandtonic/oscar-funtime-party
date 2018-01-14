import * as types from '../actions/types';

const initialState = {
  categories: {},
  selections: {}
};

const userReducer = (state = initialState, action) => {

  switch(action.type) {

    case types.CATEGORIES_WERE_FETCHED:
      return { ...state, categories: {...state.categories, ...action.payload} };

    case types.CATEGORY_WINNER_WAS_CHOSEN:
      return { ...state, selections: { ...state.selections, ...action.payload } };

    default:
      return state;

  }

};

export default userReducer;
