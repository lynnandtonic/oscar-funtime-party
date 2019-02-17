import { createSelector } from 'redux-bundler';
import firebase from '../firebase';

export const GET_NOMINEES = 'GET_NOMINEES';
export const GET_NOMINEES_SUCCESS = 'GET_NOMINEES_SUCCESS';
export const GET_NOMINEES_ERROR = 'GET_NOMINEES_ERROR';

export default {
  name: 'nominees',
  getReducer: () => {
    const initialData = {
      data: null,
      isLoading: false
    };

    return (state = initialData, { type, payload }) => {
      switch(type) {
        case GET_NOMINEES:
          return { ...state, isLoading: true };
        case GET_NOMINEES_SUCCESS:
          return { ...state, isLoading: false, data: { ...state.nominees, ...payload } };
        default:
          return state;
      }
    }
  },
  doFetchNominees: () => ({ dispatch }) => {
    dispatch({ type: GET_NOMINEES });
    firebase.database().ref("nominees").once("value", function(dataSnapshot) {
      let nominees = dataSnapshot.val();
      dispatch({ type: GET_NOMINEES_SUCCESS, payload: nominees });
    });
  },
  selectNomineesRaw: state => state.nominees,
  selectNominees: state => state.nominees.data,
  reactShouldFetchNominees: createSelector(
    'selectNomineesRaw',
    (nomineesRaw) => {
      if (nomineesRaw.isLoading || nomineesRaw.data) {
        return false;
      }
      return { actionCreator: 'doFetchNominees' }
    }
  )
}
