/*
 *
 * AddressBook reducer
 *
 */

import {
  FETCH_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAIL,
  UPDATE_CONTACT,
  SEARCHING,
} from './constants';

const initialState = {
  loading: false,
  error: false,
  searchKeys: '',
  updating: false,
  updatedId: null,
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
    case SEARCHING:
      return {
        ...state,
        searchKeys: action.value,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        updating: true,
        updatedId: action.contactId,
      };
    default:
      return state;
  }
}

export default addressBookReducer;
