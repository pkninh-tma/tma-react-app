import { call, put, select, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { switchToMailBox } from './actions';

export function* switchMailBoxswitchMailBox(action){
  const { pathName } = action;
  const mailBox = pathName.substring(pathName.lastIndexOf('/') + 1);
  yield put(switchToMailBox(mailBox))
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* mailBoxSaga() {
  yield takeEvery(LOCATION_CHANGE, switchMailBox);
}
