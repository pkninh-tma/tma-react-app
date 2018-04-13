import { call, put, select, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import {
  fetchContacts,
  contactFetchedSuccess,
  contactPutSuccess,
  contactPostSuccess,
  contactFetchedFail,
  contactPutFail,
  contactPostFail
} from '../../containers/AddressBook/actions';
import { authTokenExpired } from '../../containers/Authentication/actions';
import { makeSelectIsExpired } from '../../containers/Authentication/selectors';
import { makeSelectUpdatedItem } from '../../containers/AddressBook/selectors';
import { change, reset } from 'redux-form';
import {
  UPDATE_CONTACT,
  PUT_CONTACT,
  POST_CONTACT,
  ADDING,
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

function* createContactData(action){
  try {
    const tokenId = localStorage.getItem('token');
    const response = yield call(request, requestUrl['contact'], {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${tokenId}`,
        'content-type': 'application/json',
      }),
      body: JSON.stringify(action.data),
    });
    yield put(contactPostSuccess(response));
  } catch (err) {
    const isExpired = yield select(makeSelectIsExpired());
    if(err.response.status === 401 && !isExpired){
      yield put(authTokenExpired());
    }
    yield put(contactPostFail(err));
  }
}

function* beginToAddContact(){
  yield put(reset('contactForm'));
}

// Individual exports for testing
export default function* addressBookSaga() {
  yield put(fetchContacts());
  yield fetchContactData();
  yield takeEvery(UPDATE_CONTACT, refillFormData);
  yield takeEvery(POST_CONTACT, createContactData);
  yield takeEvery(PUT_CONTACT, updateContactData);
  yield takeEvery(ADDING, beginToAddContact);
}
