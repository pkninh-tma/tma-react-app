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
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsLoggedIn } from 'containers/Authentication/selectors';
import { authLogout } from 'containers/Authentication/actions';
import injectSaga from 'utils/injectSaga';
import saga from './saga';

import PrivateRoute from 'components/PrivateRoute';
import MailBox from 'containers/MailBox';
import FeaturePage from 'containers/FeaturePage/Loadable';
import Auth from 'containers/Authentication/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

class App extends React.Component {

  render(){

    const { isLoggedIn, logoutEventHandler } = this.props;

    let app = (
        <Switch>
          <Route path="/login" component={Auth} />
          <PrivateRoute
            path="/inbox"
            component={MailBox}
            isLoggedIn={isLoggedIn}
            onLogout={logoutEventHandler}
          />
          <Route path="" component={NotFoundPage} />
        </Switch>
    )

    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate">
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
          {app}
      </AppWrapper>
    );
  }
}

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
