/*
 *
 * AddressBook actions
 *
 */

import {
  FETCH_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAIL,
} from './constants';

export function fetchContacts() {
  return {
    type: FETCH_CONTACTS,
  };
}

export function contactFetchedSuccess(contacts) {
  return {
    type: FETCH_CONTACTS_SUCCESS,
    contacts
  };
}

export function contactFetchedFail(error) {
  return {
    type: FETCH_CONTACTS_FAIL,
    error
  };
}
