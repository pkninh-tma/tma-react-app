import { call, put, select, takeEvery, fork } from 'redux-saga/effects';
import { AUTH_START, AUTH_CHECK_TOKEN } from 'containers/Authentication/constants';
import { authSuccess, authFail, authLogout } from 'containers/Authentication/actions';
import request from 'utils/request';

const postConfig = {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
}

function* callAuthService(action) {

  const requestURL = `http://localhost:4000/api/login`;

  try {
    const response = yield call(request, requestURL, {
      ...postConfig,
      body: JSON.stringify(action.authInfo)
    });

    if(response.status === 'Fail'){
      throw new Error(response.message);
    }
    localStorage.setItem('token', response.token);
    localStorage.setItem('username', response.username);
    yield put(authSuccess(response.token, response.username));
  } catch (err) {
    yield put(authFail(err));
  }
}

function* checkAuthState() {
  console.log("asdasdasdasasdasdasdasdasdasddasd")
  const token = localStorage.getItem('token');
  if (!token) {
    yield put(authLogout());
  } else {
    const username = localStorage.getItem('username');
    yield put(authSuccess(token, username));
  }
}

export default function* rootSaga() {
  yield [
    takeEvery(AUTH_CHECK_TOKEN, checkAuthState),
    takeEvery(AUTH_START, callAuthService)
  ]
}
