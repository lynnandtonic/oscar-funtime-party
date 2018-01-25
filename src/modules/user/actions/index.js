import * as types from './types';
import { createAction } from 'redux-actions';

const userDidLogin = createAction(types.USER_DID_LOGIN);
const userDidLogout = createAction(types.USER_DID_LOGOUT);

export { userDidLogin, userDidLogout };
