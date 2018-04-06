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
import { authCheckToken, authLogout } from 'containers/Authentication/actions';

import Layout from 'components/Layout';
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

const RedirectToLogin = () => <Redirect to="/login" />

class App extends React.Component {

  componentDidMount () {
    this.props.autoLoginHandler();
  }

  render(){
    let layout = (
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="" component={RedirectToLogin} />
      </Switch>
    )

    if(this.props.isLoggedIn){

      if(this.props.location.pathname === "/login"){
        this.props.history.push('/inbox');
      }
      
      layout = (
        <Layout onLogout={this.props.logoutEventHandler}>
          <Switch>
            <Route path="/inbox" component={MailBox} />
            <Route path="/features" component={FeaturePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </Layout>
      )
    }

    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate">
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
          {layout}
      </AppWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLoggedIn(),
});

function mapDispatchToProps(dispatch) {
  return {
    autoLoginHandler: () => dispatch(authCheckToken()),
    loginEventHandler: (authInfo) => dispatch(authStart(authInfo)),
    logoutEventHandler: () => dispatch(authLogout()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(withConnect(App));
