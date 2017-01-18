import * as types from './types';
import { createAction } from 'redux-actions';

const nomineeWasFetched = createAction(types.NOMINEE_WAS_FETCHED);
const fetchNominees = createAction(types.FETCH_NOMINEES);

export { nomineeWasFetched, fetchNominees };