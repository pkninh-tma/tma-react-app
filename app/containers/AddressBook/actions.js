/*
 *
 * AddressBook actions
 *
 */

import {
  FETCH_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAIL,
  UPDATE_CONTACT,
  SEARCHING,
} from './constants';

export function fetchContacts() {
  return {
    type: FETCH_CONTACTS,
  };
}

export function contactFetchedSuccess(contacts) {
  return {
    type: FETCH_CONTACTS_SUCCESS,
    contacts,
  };
}

export function contactFetchedFail(error) {
  return {
    type: FETCH_CONTACTS_FAIL,
    error,
  };
}

export function searchInContact(value) {
  return {
    type: SEARCHING,
    value,
  };
}

export function updateContact(contactId) {
  return {
    type: UPDATE_CONTACT,
    contactId,
  };
}
