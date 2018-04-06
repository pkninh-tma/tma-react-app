/*
 *
 * MailList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_MAILS,
  LOAD_MAILS_SUCCESS,
  LOAD_MAILS_ERROR,
  MAIL_READED,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  mailData: [],
});

function mailListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MAILS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('mailData', []);
    case LOAD_MAILS_SUCCESS:
      return state
        .set('loading', false)
        .set('mailData', action.mails);
    case LOAD_MAILS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case MAIL_READED:
      const updatedMailData = state.get('mailData')
        .map(data => {
          if(data.id === action.mailId){
            data.read = true;
          }
          return data;
        });
      return state.set('mailData', updatedMailData);
    default:
      return state;
  }
}

export default mailListReducer;
