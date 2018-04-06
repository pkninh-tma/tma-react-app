import { createSelector } from 'reselect';

/**
 * Direct selector to the mailList state domain
 */
const selectMailListDomain = (state) => state.get('mailList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MailList
 */

const makeSelectMailData = () => createSelector(
  selectMailListDomain,
  (state) => state.get('mailData')
);

const makeSelectMailError = () => createSelector(
  selectMailListDomain,
  (state) => state.get('error')
);

const makeSelectMailLoading = () => createSelector(
  selectMailListDomain,
  (state) => state.get('loading')
);

export {
  selectMailListDomain,
  makeSelectMailData,
  makeSelectMailError,
  makeSelectMailLoading,
};
