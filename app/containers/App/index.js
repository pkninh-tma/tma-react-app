/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PrivateRoute from '../../components/PrivateRoute';
import MailBox from '../../containers/MailBox/Loadable';
import Auth from '../../containers/Authentication/Loadable';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';
import { makeSelectIsLoggedIn } from '../../containers/Authentication/selectors';
import { authLogout } from '../../containers/Authentication/actions';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';

import AddressBook from '../../containers/AddressBook/Loadable';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const App = ({ isLoggedIn, logoutEventHandler }) => {
  const app = (
    <Switch>
      <Route path="/login" component={Auth} />
      <PrivateRoute
        path="/inbox"
        component={MailBox}
        isLoggedIn={isLoggedIn}
        onLogout={logoutEventHandler}
      />
      <PrivateRoute
        path="/address-book"
        component={AddressBook}
        isLoggedIn={isLoggedIn}
        onLogout={logoutEventHandler}
      />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );

  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      {app}
    </AppWrapper>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logoutEventHandler: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLoggedIn(),
});

function mapDispatchToProps(dispatch) {
  return {
    logoutEventHandler: () => dispatch(authLogout()),
  };
}

const withSaga = injectSaga({ key: 'app', saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(
  compose(
    withSaga,
    withConnect,
  )(App)
);
