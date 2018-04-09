/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOG_OUT,
  AUTH_REDIRECT_PATH,
  LOCAL_STORAGE_TOKEN,
  LOCAL_STORAGE_USERNAME,
} from './constants';

const initialState = fromJS({
  tokenId: null,
  username: null,
  loading: false,
  error: false,
  isLoggedIn: false,
  authRedirectPath: '/'
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_START:
      return state
        .set('loading', true)
        .set('error', false);
    case AUTH_SUCCESS:
      return state
        .set('loading', false)
        .set('isLoggedIn', true)
        .set('tokenId', action.token)
        .set('username', action.username);
    case AUTH_FAIL:
      return state
        .set('isLoggedIn', false)
        .set('error', action.error)
        .set('loading', false);
    case AUTH_LOG_OUT:
      localStorage.removeItem(LOCAL_STORAGE_TOKEN);
      localStorage.removeItem(LOCAL_STORAGE_USERNAME);
      return state
        .set('isLoggedIn', false)
        .set('token', null)
        .set('username', null);
    case AUTH_REDIRECT_PATH:
      return state
        .set('authRedirectPath', action.path);
    default:
      return state;
  }
}

export default authReducer;
