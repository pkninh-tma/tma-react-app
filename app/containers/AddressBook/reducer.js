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
  ADDING,
  POST_CONTACT,
  POST_CONTACT_SUCCESS,
  POST_CONTACT_FAIL,
  PUT_CONTACT,
  PUT_CONTACT_SUCCESS,
  PUT_CONTACT_FAIL,
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
        updating: false,
        contacts: action.contacts,
      };
    case FETCH_CONTACTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case PUT_CONTACT:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case PUT_CONTACT_SUCCESS:
      const updatedContacts = state.contacts.map(contact => {
        if (contact._id === action.contact._id) {
          return {
            ...contact,
            ...action.contact,
          };
        }
        return contact;
      });
      return {
        ...state,
        loading: false,
        updating: true,
        contacts: updatedContacts,
      };
    case PUT_CONTACT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case POST_CONTACT:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case POST_CONTACT_SUCCESS:
      const newContacts = [...state.contacts, action.contact];
      return {
        ...state,
        loading: false,
        updating: true,
        contacts: newContacts,
      };
    case POST_CONTACT_FAIL:
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
    case ADDING:
      return {
        ...state,
        updating: false,
        updatedId: null,
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
