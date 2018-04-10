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

const makeSelectAddressBook = () => createSelector(
  selectAddressBookDomain,
  substate => substate
);

export default makeSelectAddressBook;
export {
  selectAddressBookDomain,
};
