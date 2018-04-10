import {
  LOAD_MAILS,
  LOAD_MAILS_SUCCESS,
  LOAD_MAILS_ERROR,
  MAIL_READED,
} from './constants';

const initialState = {
  loading: false,
  error: false,
  mailData: [],
};

function mailListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MAILS:
      return {
        ...state,
        loading: true,
        error: false,
        mailData: [],
      };
    case LOAD_MAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        mailData: action.mails,
      };
    case LOAD_MAILS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case MAIL_READED:
      return {
        ...state,
        mailData: state.mailData(data => ({
          ...data,
          read: data.id === action.mailId ? true : data.read,
        })),
      };
    default:
      return state;
  }
}

export default mailListReducer;
