import { createSelector } from 'reselect';

/**
 * Direct selector to the mailList state domain
 */
const selectMailListDomain = state => state.mailList;

/**
 * Other specific selectors
 */


/**
 * Default selector used by MailList
 */

const makeSelectMailData = () => createSelector(
  selectMailListDomain,
  state => state.mailData
);

const makeSelectMailError = () => createSelector(
  selectMailListDomain,
  state => state.error
);

const makeSelectMailLoading = () => createSelector(
  selectMailListDomain,
  state => state.loading
);

export {
  selectMailListDomain,
  makeSelectMailData,
  makeSelectMailError,
  makeSelectMailLoading,
};
