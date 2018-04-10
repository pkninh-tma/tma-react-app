import { put, takeEvery } from 'redux-saga/effects';
import { LOAD_MAILS } from 'containers/MailList/constants';
import { mailsLoaded, mailsLoadingError } from 'containers/MailList/actions';

import showResults from 'containers/MailList/fakeAsyncGetRequest';

export function* getMailData() {
  try {
    const mails = yield showResults();
    yield put(mailsLoaded(mails));
  } catch (err) {
    yield put(mailsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* mailData() {
  yield takeEvery(LOAD_MAILS, getMailData);
}
