import { createSelector } from 'redux-bundler';
import firebase from 'firebase';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR';
export const CATEGORY_WINNER_WAS_CHOSEN = 'CATEGORY_WINNER_WAS_CHOSEN';

export default {
  name: 'categories',
  getReducer: () => {
    const initialData = {
      data: null,
      isLoading: false
    };

    return (state = initialData, { type, payload }) => {
      switch(type) {
        case GET_CATEGORIES:
          return { ...state, isLoading: true };
        case GET_CATEGORIES_SUCCESS:
          return { ...state, isLoading: false, data: { ...state.categories, ...payload } };
        case CATEGORY_WINNER_WAS_CHOSEN:
          return { ...state, isLoading: false, data: { ...state.selections, ...payload } };
        default:
          return state;
      }
    }
  },
  doSelectCategoryWinner: (category, nomineeId) => ({ dispatch }) => {
    dispatch({ type: CATEGORY_WINNER_WAS_CHOSEN, payload: { category, nomineeId }});
  },
  doFetchCategories: () => ({ dispatch }) => {
    dispatch({ type: GET_CATEGORIES });
    firebase.database().ref("categories").once("value", function(dataSnapshot) {
      let categories = dataSnapshot.val();
      dispatch({ type: GET_CATEGORIES_SUCCESS, payload: categories });
    });
  },
  selectCategoriesRaw: state => state.categories,
  selectCategoriesData: state => state.categories.data,
  reactShouldFetchCategories: createSelector(
    'selectCategoriesRaw',
    (categoriesRaw) => {
      if (categoriesRaw.isLoading || categoriesRaw.data) {
        return false;
      }
      return { actionCreator: 'doFetchCategories' }
    }
  )
}
