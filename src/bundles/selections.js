import { createSelector } from 'redux-bundler';
import firebase from 'firebase';
import { USER_DID_LOGOUT } from './user';

export const SELECTION_WAS_MADE = 'SELECTION_WAS_MADE';
export const SELECTION_SAVE_SUCCESS = 'SELECTION_SAVE_SUCCESS';
export const SELECTION_SAVE_FAILED = 'SELECTION_SAVE_FAILED';
export const SELECTIONS_WERE_SAVED = 'SELECTIONS_WERE_SAVED';
export const GET_SELECTIONS = 'GET_SELECTIONS';
export const GET_SELECTIONS_SUCCESS = 'GET_SELECTIONS_SUCCESS';
export const USER_SHOULD_LOGIN = 'USER_SHOULD_LOGIN';

const YEAR = 2018;

export default {
  name: 'selections',
  getReducer: () => {
    const initialData = {
      data: null,
      isLoading: false
    };

    return (state = initialData, {type, payload}) => {
      switch(type) {
        case GET_SELECTIONS:
          return { ...state, isLoading: true };
        case GET_SELECTIONS_SUCCESS:
          return { ...state, isLoading: false, data: { ...state.selections, ...payload} };
        case SELECTION_WAS_MADE:
          let selection = { [payload.category.id]: payload.nomineeId };
          let selections = state.data || {};
          let newSelections = { ...selections, ...selection };
          return { ...state, data: newSelections };
        case USER_DID_LOGOUT:
          return { ...state, data: null };
        default:
          return state;
      }
    }
  },
  selectSelectionsRaw: state => {
    return state.selections
  },
  selectSelections: state => state.selections.data,
  doFetchSelections: () => ({ dispatch, getState }) => {
    dispatch({ type: GET_SELECTIONS });
    const user = getState().user.data;
    firebase.database().ref(`selections/${user.uid}/${YEAR}`).once("value", function(dataSnapshot) {
      let selections = dataSnapshot.val();
      dispatch({ type: GET_SELECTIONS_SUCCESS, payload: selections });
    });
  },
  doSelectCategoryWinner: (category, nomineeId) => ({ dispatch, getState }) => {
    dispatch({ type: SELECTION_WAS_MADE, payload: { category, nomineeId }});
    const userRaw = getState().user;
    // If we dont have a user we can't save, they should login
    if (!userRaw || !userRaw.data) {
      dispatch({ type: USER_SHOULD_LOGIN });
      return;
    }
    const user = userRaw.data;
    // TODO: The year should be dynamic
    firebase.database().ref().update({
      [`selections/${user.uid}/${YEAR}/${category.id}`]: nomineeId
    }).then(() => {
      dispatch({ type: SELECTION_SAVE_SUCCESS })
    }).catch(() => {
      dispatch({ type: SELECTION_SAVE_FAILED })
    });
  },
  reactShouldFetchSelections: createSelector(
    'selectSelectionsRaw',
    'selectUserData',
    (selectionsRaw, userData) => {
      if ((selectionsRaw.isLoading || selectionsRaw.data) || userData === null) {
        return false;
      }
      return { actionCreator: 'doFetchSelections' };
    }
  )
}
