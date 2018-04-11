import { put, takeEvery } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import { authSuccess, authLogout } from '../../containers/Authentication/actions';
import {
  LOCAL_STORAGE_TOKEN,
  LOCAL_STORAGE_USERNAME,
  AUTH_LOG_OUT,
} from '../../containers/Authentication/constants';

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
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_USERNAME);
  yield put(replace('/login'));
}

export default function* appSaga() {
  yield checkAuthState();
  yield takeEvery(AUTH_LOG_OUT, doLogout);
}
