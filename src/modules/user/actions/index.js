import * as types from './types';
import { createAction } from 'redux-actions';

const userDidLogin = createAction(types.USER_DID_LOGIN);
const userDidLogout = createAction(types.USER_DID_LOGOUT);
const userLogoutFailed = createAction(types.USER_LOGOUT_FAILED);

export { userDidLogin, userDidLogout, userLogoutFailed };
