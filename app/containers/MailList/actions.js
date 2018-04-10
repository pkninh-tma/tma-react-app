/*
 *
 * MailList actions
 *
 */

import {
  LOAD_MAILS,
  LOAD_MAILS_SUCCESS,
  LOAD_MAILS_ERROR,
  MAIL_READED,
} from './constants';

export function loadMails() {
  return {
    type: LOAD_MAILS,
  };
}

export function mailsLoaded(mails) {
  return {
    type: LOAD_MAILS_SUCCESS,
    mails,
  };
}

export function mailsLoadingError(error) {
  return {
    type: LOAD_MAILS_ERROR,
    error,
  };
}

export function mailReaded(mailId) {
  return {
    type: MAIL_READED,
    mailId,
  };
}
