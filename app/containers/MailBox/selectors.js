import { createSelector } from 'reselect';

const selectMailboxDomain = (state) => state.get('mailbox');

const makeSelectActiveItem = () => createSelector(
  selectMailboxDomain,
  (state) => state.get('activeItem')
);

const makeSelectMenuItems = () => createSelector(
  selectMailboxDomain,
  (state) => state.get('menuItems').toJS()
);

export {
  selectMailboxDomain,
  makeSelectActiveItem,
  makeSelectMenuItems
};
