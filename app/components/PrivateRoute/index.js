import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../../components/Layout';

const PrivateRoute = props => {
  const {
    component: Component,
    isLoggedIn,
    onLogout,
    ...routerOpts
  } = props;

  return (
    <Route
      {...routerOpts}
      render={myProps => (
        isLoggedIn === true ? (
          <Layout onLogout={onLogout} >
            <Component {...myProps} />
          </Layout>
        )
          : <Redirect to="/login" />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  isLoggedIn: PropTypes.bool,
  onLogout: PropTypes.func,
};

export default PrivateRoute;
