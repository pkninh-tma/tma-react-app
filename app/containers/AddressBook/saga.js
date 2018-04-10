import { call, put, takeEvery } from 'redux-saga/effects';
import { contactFetchedSuccess, contactFetchedFail } from 'containers/AddressBook/actions';
import {
  FETCH_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAIL,
} from 'containers/AddressBook/constants';
import request from 'utils/request';

const requestURL = 'http://localhost:4000/api/contact';

export function* fetchContactData(){
  try {
    const tokenId = localStorage.getItem('token');
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Bearer ${tokenId}`,
      })
    });
    if (response.status === 'Fail') {
      throw new Error(response.message);
    }
    yield put(contactFetchedSuccess(response.items));
  } catch (err) {
    yield put(contactFetchedFail(err));
  }
}

// Individual exports for testing
export default function* addressBookSaga() {
  yield fetchContactData();
}
