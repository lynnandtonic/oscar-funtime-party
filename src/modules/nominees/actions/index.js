import * as types from './types';
import { createAction } from 'redux-actions';

const nomineesWereFetched = createAction(types.NOMINEES_WERE_FETCHED);
const fetchNominees = createAction(types.FETCH_NOMINEES);
const nomineeWasSelected = createAction(types.NOMINEE_WAS_SELECTED);

export { nomineesWereFetched, fetchNominees, nomineeWasSelected };
