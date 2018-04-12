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
  ADDING,
  PUT_CONTACT,
  PUT_CONTACT_SUCCESS,
  PUT_CONTACT_FAIL,
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

export function putContact(data) {
  return {
    type: PUT_CONTACT,
    data,
  };
}

export function contactPutSuccess(contact) {
  return {
    type: PUT_CONTACT_SUCCESS,
    contact,
  };
}

export function contactPutFail(error) {
  return {
    type: PUT_CONTACT_FAIL,
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

export function startAddContact() {
  return {
    type: ADDING,
  };
}
