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
import { authStart } from 'containers/Authentication/actions';
// import { Redirect } from 'react-router-dom';
// import messages from './messages';
import LoginForm from 'components/LoginForm';
import Spinner from 'components/LoadingIndicator';
import injectSaga from 'utils/injectSaga';

import { makeSelectLoading } from './selectors';

import saga from './saga';

export class Authentication extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleSubmit = values => {
    this.props.loginEventHandler(values);
  }

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.handleSubmit} />;
        {this.props.loading ? <Spinner /> : null}
      </div>
    );
  }
}

Authentication.propTypes = {
  loginEventHandler: PropTypes.func,
  loading: PropTypes.any,
};

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
