import { put, takeEvery } from 'redux-saga/effects';
import { authSuccess, authLogout } from 'containers/Authentication/actions';
import { replace } from 'react-router-redux';
import {
  LOCAL_STORAGE_TOKEN,
  LOCAL_STORAGE_USERNAME,
  AUTH_LOG_OUT
} from 'containers/Authentication/constants';
import request from 'utils/request';

function* checkAuthState() {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
  if (!token) {
    yield put(authLogout());
  } else {
    const username = localStorage.getItem(LOCAL_STORAGE_USERNAME);
    yield put(authSuccess(token, username));
  }
}

function* doLogout() {
  yield put(replace('/login'));
}

export default function* appSaga() {
  yield checkAuthState();
  yield takeEvery(AUTH_LOG_OUT, doLogout);
}
