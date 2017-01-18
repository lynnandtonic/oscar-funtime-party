import * as types from './types';
import { createAction } from 'redux-actions';

const getCategoriesSuccess = createAction(types.GET_CATEGORIES_SUCCESS);
const categoryWasFetched = createAction(types.CATEGORY_WAS_FETCHED);
const fetchCategories = createAction(types.FETCH_CATEGORIES);

export { getCategoriesSuccess, categoryWasFetched, fetchCategories };