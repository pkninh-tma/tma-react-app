import { put } from 'redux-saga/effects';
import { authSuccess, authLogout } from 'containers/Authentication/actions';
import {
  LOCAL_STORAGE_TOKEN,
  LOCAL_STORAGE_USERNAME,
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

export default function* appSaga() {
  yield checkAuthState();
}
