import React from 'react';
import MailboxMenuItem from 'components/MailboxMenuItem';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

function MailboxMenu(props) {
  const { activeItem, rootUrl, menuItems, clickEvent } = props;
  const updatedItems = menuItems.map(item => (
    <MailboxMenuItem
      key={item.name}
      iName={item.name}
      iActived={activeItem === item.name}
      iTargetUrl={item.url}
      iRootUrl={rootUrl}
      iUnread={item.label.unread}
      iOnClick={clickEvent}
    >
      {item.label.text}
    </MailboxMenuItem>
  ));

  return (
    <Menu fluid vertical tabular>
      {updatedItems}
    </Menu>
  );
}

MailboxMenu.propTypes = {
  activeItem: PropTypes.string,
  menuItems: PropTypes.array,
  rootUrl: PropTypes.string,
  clickEvent: PropTypes.func,
};

export default MailboxMenu;
