import React from 'react';
import Layout from 'components/Layout';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {

  const {
    component: Component,
    isLoggedIn,
    onLogout,
    ...routerOpts
  } = props;

  return (
    <Route {...routerOpts} render={ (props) => (
      isLoggedIn === true ? (
      <Layout onLogout={onLogout} >
        <Component {...props} />
      </Layout>
      )
    : <Redirect to='/login' />
    )}
    />
  )
}

export default PrivateRoute;