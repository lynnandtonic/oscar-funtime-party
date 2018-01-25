import * as types from '../actions/types';

const initialState = {
  user: null
};

const userReducer = (state = initialState, action) => {

  switch(action.type) {

    case types.USER_DID_LOGIN:
      return { ...state, user: {...action.payload.user} };

    case types.USER_DID_LOGOUT:
      return { ...state, user: null };

    default:
      return state;

  }

};

export default userReducer;
