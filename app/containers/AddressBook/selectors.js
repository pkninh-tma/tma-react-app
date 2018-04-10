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

const makeSelectLoading = () => createSelector(
  selectAddressBookDomain,
  substate => substate.loading
);

const makeSelectSearchKeys = () => createSelector(
  selectAddressBookDomain,
  substate => substate.searchKeys
);

const makeSelectUpdating = () => createSelector(
  selectAddressBookDomain,
  substate => substate.updating
);

const makeSelectUpdatedItem = () => createSelector(
  selectAddressBookDomain,
  substate => {
    if(substate.updatedId !== null){
      return substate.contacts.find(contact => contact._id === substate.updatedId);
    }
    return null;
  }
);

const makeSelectContactFiltered = () => createSelector(
  selectAddressBookDomain,
  substate => {
    if(substate.searchKeys !== '') {
      return substate.contacts.filter(contact => {
        const fullName = `${contact.firstName} ${contact.lastName}`;
        return fullName.toLowerCase().includes(substate.searchKeys);
      });
    }
    return substate.contacts;
  }
);

export {
  selectAddressBookDomain,
  makeSelectContacts,
  makeSelectLoading,
  makeSelectSearchKeys,
  makeSelectUpdating,
  makeSelectUpdatedItem,
  makeSelectContactFiltered
};
