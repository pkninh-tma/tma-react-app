/*
 *
 * AddressBook reducer
 *
 */

import {
  FETCH_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAIL,
} from './constants';

const initialState = {
  loading: false,
  error: false,
  contacts: [],
};

function addressBookReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.contacts,
      };
    case FETCH_CONTACTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default addressBookReducer;
