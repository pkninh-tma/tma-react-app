import { createSelector } from 'reselect';

/**
 * Direct selector to the addressBook state domain
 */
const selectAddressBookDomain = state => state.addressBook;

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddressBook
 */

const makeSelectContacts = () => createSelector(
  selectAddressBookDomain,
  substate => substate.contacts
);

export {
  selectAddressBookDomain,
  makeSelectContacts
};
