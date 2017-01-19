import * as types from './types';
import { createAction } from 'redux-actions';

const getCategoriesSuccess = createAction(types.GET_CATEGORIES_SUCCESS);
const categoryWasFetched = createAction(types.CATEGORY_WAS_FETCHED);
const fetchCategories = createAction(types.FETCH_CATEGORIES);
const categoryWinnerSelected = createAction(types.CATEGORY_WINNER_WAS_CHOSEN);

export { getCategoriesSuccess, categoryWasFetched, fetchCategories, categoryWinnerSelected };