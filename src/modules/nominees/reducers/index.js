import * as types from '../actions/types';

const initialState = {
  nominees: []
};

const nomineeReducer = (state = initialState, action) => {

  switch(action.type) {

    case types.NOMINEE_WAS_FETCHED:
      return { ...state, nominees: [...state.nominees, action.payload] };

    default:
      return state;

  }

};

export default nomineeReducer;