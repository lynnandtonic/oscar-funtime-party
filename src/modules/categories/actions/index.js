import * as types from './types';
import { createAction } from 'redux-actions';

const getCategoriesSuccess = createAction(types.GET_CATEGORIES_SUCCESS);
const categoriesWereFetched = createAction(types.CATEGORIES_WERE_FETCHED);
const fetchCategories = createAction(types.FETCH_CATEGORIES);
const categoryWinnerSelected = createAction(types.CATEGORY_WINNER_WAS_CHOSEN);

export { getCategoriesSuccess, categoriesWereFetched, fetchCategories, categoryWinnerSelected };
