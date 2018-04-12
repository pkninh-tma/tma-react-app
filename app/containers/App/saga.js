import { put, call, takeEvery, take, select } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import { replace } from 'react-router-redux';
import request from 'utils/request';
import { authSuccess, authLogout, authTokenExpired } from '../../containers/Authentication/actions';
import { makeSelectIsExpired } from '../../containers/Authentication/selectors';
import {
  LOCAL_STORAGE_TOKEN,
  LOCAL_STORAGE_USERNAME,
  AUTH_SUCCESS,
  AUTH_LOG_OUT,
} from '../../containers/Authentication/constants';

const requestUrl = {
    ping: 'api/ping',
    logout: 'api/logout',
}

function clearLocalStorage(){
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_USERNAME);
}

function emitTokenToChecker(emitter) {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
  if (token) {
    emitter(token);
  } else {
    emitter(END);
  }
}

function countDown(expirationTime) {
  return eventChannel(emitter => {
    emitTokenToChecker(emitter);
    const iv = setInterval(() => {
      emitTokenToChecker(emitter);
    }, expirationTime);
    return () => {
      clearInterval(iv);
    };
  });
}

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
  try {
    const tokenId = localStorage.getItem(LOCAL_STORAGE_TOKEN);
    const response = yield call(request, requestUrl['logout'], {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${tokenId}`,
      }),
    });
    yield call(clearLocalStorage);
    yield put(replace('/login'));
  } catch (err) {
    if(err.response.status === 401){
      yield call(clearLocalStorage);
      yield put(replace('/login'));
    }
  }
}

export function* checkToken() {
  const checking = yield call(countDown, 60000);
  try {
    /* eslint-disable fp/no-loops */
    while (true) {
      const tokenId = yield take(checking);
      console.log(`Checking tokenId`);
      const response = yield call(request, requestUrl['ping'], {
        method: 'HEAD',
        headers: new Headers({
          Authorization: `Bearer ${tokenId}`,
        }),
      });
    }
  } catch (err) {
    const isExpired = yield select(makeSelectIsExpired());
    if (!isExpired) {
      yield put(authTokenExpired());
    }
  } finally {
    console.log('Checked process has been terminated');
    checking.close();
  }
}

export default function* appSaga() {
  yield [
    checkAuthState(),
    // fire checkToken here to check after refreshing.
    checkToken(),
    takeEvery(AUTH_SUCCESS, checkToken),
    takeEvery(AUTH_LOG_OUT, doLogout),
  ];
}
