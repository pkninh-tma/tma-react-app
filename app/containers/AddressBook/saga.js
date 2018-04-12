import { call, put, select, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import {
  fetchContacts,
  contactFetchedSuccess,
  contactFetchedFail,
  contactPutSuccess,
  contactPutFail
} from '../../containers/AddressBook/actions';
import { authTokenExpired } from '../../containers/Authentication/actions';
import { makeSelectIsExpired } from '../../containers/Authentication/selectors';
import { makeSelectUpdatedItem } from '../../containers/AddressBook/selectors';
import { change } from 'redux-form';
import {
  UPDATE_CONTACT,
  PUT_CONTACT
} from '../../containers/AddressBook/constants';

const requestUrl = {
  contact: 'api/contact',
}

export function* fetchContactData() {
  try {
    const tokenId = localStorage.getItem('token');
    const response = yield call(request, requestUrl['contact'], {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${tokenId}`,
      }),
    });
    yield put(contactFetchedSuccess(response.items));
  } catch (err) {
    const isExpired = yield select(makeSelectIsExpired());
    if(err.response.status === 401 && !isExpired){
      yield put(authTokenExpired());
    }
    yield put(contactFetchedFail(err));
  }
}

function* refillFormData(action){
  const updatedItem = yield select(makeSelectUpdatedItem());
  for(let key in updatedItem) {
    console.log(`${key} : ${updatedItem[key]}`)
    yield put(change('contactForm', key, updatedItem[key]));
  }
}

function* updateContactData(action){
  try {
    const tokenId = localStorage.getItem('token');
    const response = yield call(request, `${requestUrl['contact']}/${action.data._id}`, {
      method: 'PUT',
      headers: new Headers({
        Authorization: `Bearer ${tokenId}`,
        'content-type': 'application/json',
      }),
      body: JSON.stringify(action.data),
    });
    yield put(contactPutSuccess(response));
  } catch (err) {
    const isExpired = yield select(makeSelectIsExpired());
    if(err.response.status === 401 && !isExpired){
      yield put(authTokenExpired());
    }
    yield put(contactPutFail(err));
  }
}

// Individual exports for testing
export default function* addressBookSaga() {
  yield put(fetchContacts());
  yield fetchContactData();
  yield takeEvery(UPDATE_CONTACT, refillFormData);
  yield takeEvery(PUT_CONTACT, updateContactData);
}
