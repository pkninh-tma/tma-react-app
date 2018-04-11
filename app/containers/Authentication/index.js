/**
 *
 * Authentication
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose as recompose, withHandlers } from 'recompose';
import { authStart } from '../../containers/Authentication/actions';
// import { Redirect } from 'react-router-dom';
// import messages from './messages';
import LoginForm from '../../components/LoginForm';
import Spinner from '../../components/LoadingIndicator';
import injectSaga from '../../utils/injectSaga';

import { makeSelectLoading } from './selectors';

import saga from './saga';

export const StatelessAuthentication = ({ handleSubmit, loading }) => (
  <div>
    <LoginForm onSubmit={handleSubmit} />;
        {loading ? <Spinner /> : null}
  </div>
);

StatelessAuthentication.propTypes = {
  handleSubmit: PropTypes.func,
  loading: PropTypes.any,
};


const Authentication = recompose(
  withHandlers({
    handleSubmit: props => values => {
      props.loginEventHandler(values);
    },
  })
)(StatelessAuthentication);

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    loginEventHandler: authInfo => dispatch(authStart(authInfo)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'authentication', saga });

export default compose(
  withSaga,
  withConnect,
)(Authentication);
