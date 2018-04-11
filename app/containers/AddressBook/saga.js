import { call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchContacts, contactFetchedSuccess, contactFetchedFail } from '../../containers/AddressBook/actions';
import { authTokenExpired } from '../../containers/Authentication/actions';

import { makeSelectIsExpired } from '../../containers/Authentication/selectors';
// import {
//   FETCH_CONTACTS,
// } from 'containers/AddressBook/constants';

const requestURL = 'api/contact';

export function* fetchContactData() {
  try {
    const tokenId = localStorage.getItem('token');
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${tokenId}`,
      }),
    });
    if (response.status === 'Fail') {
      throw response;
    }
    yield put(contactFetchedSuccess(response.items));
  } catch (err) {
    console.log(err)
    // const isExpired = yield select(makeSelectIsExpired());
    // if(!isExpired){
    //   yield put(authTokenExpired());
    // }
    yield put(contactFetchedFail(err));
  }
}

// Individual exports for testing
export default function* addressBookSaga() {
  yield put(fetchContacts());
  yield fetchContactData();
}
