import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from 'components/Toolbar';
import SideBar from 'components/SideBar';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <SideBar onLogout={this.props.onLogout}>
          <Toolbar/>
          <main>{ this.props.children }</main>
        </SideBar>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  onLogout: PropTypes.func,
};

export default Layout;
