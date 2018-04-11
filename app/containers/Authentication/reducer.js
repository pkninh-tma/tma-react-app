/*
 *
 * LoginPage reducer
 *
 */

import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOG_OUT,
  AUTH_REDIRECT_PATH,
  AUTH_TOKEN_EXPIRED,
} from './constants';

const initialState = {
  loading: false,
  error: false,
  isLoggedIn: false,
  isExpired: false,
  authRedirectPath: '/',
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        isExpired: false,
        tokenId: action.token,
        username: action.username,
      };
    case AUTH_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        error: action.error,
      };
    case AUTH_LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        isExpired: false,
        tokenId: '',
        username: '',
      };
    case AUTH_TOKEN_EXPIRED:
      return {
        ...state,
        isExpired: true,
      };
    case AUTH_REDIRECT_PATH:
      return {
        ...state,
        authRedirectPath: action.path,
      };
    default:
      return state;
  }
}

export default authReducer;
