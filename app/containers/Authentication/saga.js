import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { authSuccess, authFail } from '../../containers/Authentication/actions';
import {
  AUTH_START,
  LOCAL_STORAGE_TOKEN,
  LOCAL_STORAGE_USERNAME,
} from '../../containers/Authentication/constants';
import request from '../../utils/request';

const postConfig = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
};

const requestUrl = {
  loginApi: 'api/login',
}

function* callAuthService(action) {
  try {
    const response = yield call(request, requestUrl['loginApi'], {
      ...postConfig,
      body: JSON.stringify(action.authInfo),
    });
    localStorage.setItem(LOCAL_STORAGE_TOKEN, response.token);
    localStorage.setItem(LOCAL_STORAGE_USERNAME, response.username);
    yield put(authSuccess(response.token, response.username));
    yield put(push('/inbox'));
  } catch (err) {
    const resBody = yield err.response.json();
    yield put(authFail(resBody));
  }
}

export default function* authenticationSaga() {
  yield takeEvery(AUTH_START, callAuthService);
}
