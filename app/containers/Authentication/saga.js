import { call, put, takeEvery } from 'redux-saga/effects';
import { authSuccess, authFail } from 'containers/Authentication/actions';
import { push } from 'react-router-redux';
import {
  AUTH_START,
  LOCAL_STORAGE_TOKEN,
  LOCAL_STORAGE_USERNAME,
} from 'containers/Authentication/constants';
import request from 'utils/request';

const postConfig = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
};

const requestURL = 'http://localhost:4000/api/login';

function* callAuthService(action) {
  try {
    const response = yield call(request, requestURL, {
      ...postConfig,
      body: JSON.stringify(action.authInfo),
    });

    if (response.status === 'Fail') {
      throw new Error(response.message);
    }
    localStorage.setItem(LOCAL_STORAGE_TOKEN, response.token);
    localStorage.setItem(LOCAL_STORAGE_USERNAME, response.username);
    yield put(authSuccess(response.token, response.username));
    yield put(push('/inbox'));
  } catch (err) {
    yield put(authFail(err));
  }
}

export default function* authenticationSaga() {
  yield takeEvery(AUTH_START, callAuthService);
}
