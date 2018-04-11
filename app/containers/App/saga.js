import { put, call, takeEvery, take } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import { replace } from 'react-router-redux';
import request from 'utils/request';
import { authSuccess, authLogout } from '../../containers/Authentication/actions';
// import { makeSelectIsLoggedIn } from '../../containers/Authentication/selectors';
import {
  LOCAL_STORAGE_TOKEN,
  LOCAL_STORAGE_USERNAME,
  AUTH_SUCCESS,
  AUTH_LOG_OUT,
} from '../../containers/Authentication/constants';


const requestURL = 'api/ping';

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
  console.log('Is it really goes here!!!!!!!!');
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_USERNAME);
  yield put(replace('/login'));
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

export function* checkToken() {
  const checking = yield call(countDown, 2000);
  try {
    /* eslint-disable fp/no-loops */
    while (true) {
      const tokenId = yield take(checking);
      console.log(`TokenId: ${tokenId}`);
      // const response =
      yield call(request, requestURL, {
        method: 'HEAD',
        headers: new Headers({
          Authorization: `Bearer ${tokenId}`,
        }),
      });
    }
  } finally {
    console.log('Checked process has been terminated');
    // const isLoggedIn = yield select(makeSelectIsLoggedIn());

    yield put(authLogout());
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
