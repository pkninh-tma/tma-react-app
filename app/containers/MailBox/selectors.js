import { createSelector } from 'reselect';

const selectMailboxDomain = state => state.mailbox;

const makeSelectActiveItem = () => createSelector(
  selectMailboxDomain,
  state => state.activeItem
);

const makeSelectMenuItems = () => createSelector(
  selectMailboxDomain,
  state => state.menuItems
);

export {
  selectMailboxDomain,
  makeSelectActiveItem,
  makeSelectMenuItems,
};
