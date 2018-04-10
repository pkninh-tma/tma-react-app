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
  // LOCAL_STORAGE_TOKEN,
  // LOCAL_STORAGE_USERNAME,
} from './constants';

const initialState = {
  // tokenId: null,
  // username: null,
  loading: false,
  error: false,
  isLoggedIn: false,
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
        loading: false,
        isLoggedIn: true,
        tokenId: action.token,
        username: action.username,
      };
    case AUTH_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        error: action.error,
        loading: false,
      };
    case AUTH_LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        token: '',
        username: '',
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
