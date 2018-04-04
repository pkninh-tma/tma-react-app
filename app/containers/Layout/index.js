import React from 'react';
import Toolbar from 'components/Toolbar';
import SideBar from 'components/SideBar';

class Layout extends React.Component {
  state = {
    showSidebar: false
  }

  sideBarToggleHandler = () => {
    this.setState( ( prevState ) => {
        return { showSidebar: !prevState.showSidebar };
    });
  }

  render () {
    return (
      <div>
        <SideBar showed={this.state.showSidebar}>
          <Toolbar/>
          <main style={{padding: '10px'}}>
            {this.props.children}
          </main>
        </SideBar>
      </div>
    );
  }
}

export default Layout;
