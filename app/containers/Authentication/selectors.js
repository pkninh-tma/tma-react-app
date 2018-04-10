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

export {
  selectAuthDomain,
  makeSelectToken,
  makeSelectIsLoggedIn,
  makeSelectLoading,
};
