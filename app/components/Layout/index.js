import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../ToolBar';
import SideBar from '../SideBar';

const Layout = ({ children, onLogout }) => (
  <div>
    <SideBar onLogout={onLogout}>
      <Toolbar />
      <main>{children}</main>
    </SideBar>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  onLogout: PropTypes.func,
};

export default Layout;
