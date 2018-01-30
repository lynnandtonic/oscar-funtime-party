import { createSelector } from 'redux-bundler';
import { auth, provider } from '../firebase';

export const USER_LOGGING_IN = 'USER_LOGGING_IN';
export const USER_DID_LOGIN = 'USER_DID_LOGIN';
export const USER_DID_LOGOUT = 'USER_DID_LOGOUT';
export const USER_LOGOUT_FAILED = 'USER_LOGOUT_FAILED';

export default {
  name: 'user',
  getReducer: () => {
    const initialData = {
      data: null,
      isLoading: false
    };

    return (state = initialData, { type, payload }) => {
      switch(type) {
        case USER_LOGGING_IN:
          return { ...state, isLoading: true }
        case USER_DID_LOGIN:
          return { ...state, isLoading: false, data: payload };
        case USER_DID_LOGOUT:
          return { ...state, isLoading: false, data: null };
        case USER_LOGOUT_FAILED:
          return state; // TODO: handle this failure
        default:
          return state;
      }
    }
  },
  doLoginUser: (evt) => ({dispatch}) => {
    evt.preventDefault();
    auth.signInWithRedirect(provider);
  },
  doLogoutUser: (evt) => ({dispatch}) => {
    auth.signOut().then(function() {
      dispatch({ type: USER_DID_LOGOUT });
    }).catch(function() {
      dispatch({ type: USER_LOGOUT_FAILED });
    });
  },
  doInitiateLogin: () => ({dispatch}) => {
    dispatch({type: USER_LOGGING_IN})
    auth.onAuthStateChanged(function(user) {
      if (user) {
        dispatch({ type : USER_DID_LOGIN, payload: user });
      } else {
        dispatch({ type : USER_DID_LOGOUT });
      }
    });
  },
  selectUserRaw: state => state.user,
  selectUserData: state => state.user.data,
  selectIsLoggedIn: createSelector(
    'selectUserData',
    userState => !!userState
  ),
  reactInitiateLogin: createSelector(
    'selectUserRaw',
    (userRaw) => {
      if (userRaw.isLoading || userRaw.data) {
        return false;
      }
      return { actionCreator: 'doInitiateLogin' }
    }
  )
}
