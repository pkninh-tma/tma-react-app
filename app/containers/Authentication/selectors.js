import { createSelector } from 'reselect';

/**
 * Direct selector to the Authentication state domain
 */
const selectAuthDomain = (state) => state.get('auth');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Auth
 */
const makeSelectToken = () => createSelector(
  selectAuthDomain,
  (state) => state.get('tokenId')
);

const makeSelectIsLoggedIn = () => createSelector(
  selectAuthDomain,
  (state) => state.get('isLoggedIn')
);

const makeSelectLoading = () => createSelector(
  selectAuthDomain,
  (state) => state.get('loading')
);

export {
  selectAuthDomain,
  makeSelectToken,
  makeSelectIsLoggedIn,
  makeSelectLoading
};
