import React from 'react';
import { Menu, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MailboxMenuItem(props) {
  const { iName, iActived, iTargetUrl, iRootUrl, iUnread, iOnClick, children } = props;
  return (
    <Menu.Item
      name={iName}
      active={iActived}
    >
      <Label>{iUnread}</Label>
      <Link
        onClick={() => iOnClick(iName)}
        to={`${iRootUrl}${iTargetUrl}`}
      >
        {children}
      </Link>
    </Menu.Item>
  );
}

MailboxMenuItem.propTypes = {
  iName: PropTypes.string,
  iActived: PropTypes.bool,
  iTargetUrl: PropTypes.string,
  iRootUrl: PropTypes.string,
  iUnread: PropTypes.number,
  iOnClick: PropTypes.func,
  children: PropTypes.any,
};

export default MailboxMenuItem;
