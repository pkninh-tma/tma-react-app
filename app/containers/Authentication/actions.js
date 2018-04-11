/*
 *
 * Authentication actions
 *
 */

import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_CHECK_TOKEN,
  AUTH_LOG_OUT,
  AUTH_REDIRECT_PATH,
  AUTH_TOKEN_EXPIRED,
} from './constants';

export const authStart = authInfo => ({
  type: AUTH_START,
  authInfo,
});

export const authSuccess = (token, username) => ({
  type: AUTH_SUCCESS,
  token,
  username,
});

export const authFail = error => ({
  type: AUTH_FAIL,
  error,
});

export const setAuthRedirectPath = path => ({
  type: AUTH_REDIRECT_PATH,
  path,
});


export const authCheckToken = () => ({
  type: AUTH_CHECK_TOKEN,
});

export const authLogout = () => ({
  type: AUTH_LOG_OUT,
});

export const authTokenExpired = () => ({
  type: AUTH_TOKEN_EXPIRED,
});
