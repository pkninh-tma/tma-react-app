import React from 'react';
import Toolbar from 'components/Toolbar';
import SideBar from 'components/SideBar';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <SideBar>
          <Toolbar/>
          <main>{ this.props.children }</main>
        </SideBar>
      </div>
    );
  }
}

export default Layout;
