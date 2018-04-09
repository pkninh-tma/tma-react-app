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
} from './constants';

export const authStart = (authInfo) => {
  return {
    type: AUTH_START,
    authInfo,
  };
};

export const authSuccess = (token, username) => {
  return {
    type: AUTH_SUCCESS,
    token: token,
    username: username
  };
};

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error: error
  };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckToken = () => {
  return {
    type: AUTH_CHECK_TOKEN
  };
};

export const authLogout = () => {
  return {
    type: AUTH_LOG_OUT,
  };
};
