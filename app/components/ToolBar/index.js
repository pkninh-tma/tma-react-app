import React from 'react';
import { Menu } from 'semantic-ui-react';

function ToolBar(props){
  return(
    <Menu secondary>
        <Menu.Item name='home' />
        <Menu.Menu position='right'>
          <Menu.Item name='Logo' />
        </Menu.Menu>
    </Menu>
  )
}

export default ToolBar;
