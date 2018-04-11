import { createSelector } from 'reselect';

/**
 * Direct selector to the Authentication state domain
 */
const selectAuthDomain = state => state.auth;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Auth
 */
const makeSelectToken = () => createSelector(
  selectAuthDomain,
  state => state.tokenId
);

const makeSelectIsLoggedIn = () => createSelector(
  selectAuthDomain,
  state => state.isLoggedIn
);

const makeSelectLoading = () => createSelector(
  selectAuthDomain,
  state => state.loading
);

const makeSelectError = () => createSelector(
  selectAuthDomain,
  state => state.error
);

const makeSelectIsExpired = () => createSelector(
  selectAuthDomain,
  state => state.isExpired
);

export {
  selectAuthDomain,
  makeSelectToken,
  makeSelectIsLoggedIn,
  makeSelectLoading,
  makeSelectError,
  makeSelectIsExpired,
};
