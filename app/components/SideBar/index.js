import React from 'react';
// import ToolBar from 'components/ToolBar';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const FlexContainer = styled.div`
  display: -webkit-flex;
  display: flex;
  min-height: 100%;
`;

const SideNav = styled.div`
  background-color: lightgray;
  -webkit-flex: 1;
  flex: 1;
`;

const Content = styled.div`
  -webkit-flex: 5;
  flex: 10;
  height: 100vh;
`;

// const SideDrawFooter = styled.div`
//   position: absolute;
//   width: 200px;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   padding: 1rem;
//   background-color: #efefef;
//   text-align: center;
// `;

const SideBar = ({ onLogout, children }) => (
  <FlexContainer>
    <SideNav>
      <ul>
        <li>
          <NavLink to="/inbox" exact>Inbox</NavLink>
        </li>
        <li>
          <NavLink to="/address-book">Address Book</NavLink>
        </li>
        <li>
          <NavLink onClick={onLogout} to="/login">Logout</NavLink>
        </li>
      </ul>
    </SideNav>
    <Content>
      {children}
    </Content>
  </FlexContainer>
);

SideBar.propTypes = {
  onLogout: PropTypes.func,
  children: PropTypes.any,
};

export default SideBar;
