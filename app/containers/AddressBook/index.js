/**
 *
 * AddressBook
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid, Segment } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddressBook from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';

export class AddressBook extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    contacts: [
      {
        firstName: 'Daniel',
        lastName: 'Louise',
        email: 'crazy.boy@yahoo.com',
        phoneNumber: '01231837213',
      },
      {
        firstName: 'Stevie',
        lastName: 'Feliciano',
        email: 'magical.candy@hotmail.com',
        phoneNumber: '1133541111',
      },
    ],
  }

  handleSubmit = values => {
    this.setState({
      contacts: [...this.state.contacts, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.mail,
        phoneNumber: values.phone,
      }],
    });
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={7}>
          <Segment>
            <p>Searching Bar</p>
            <ContactList contacts={this.state.contacts} />
          </Segment>
        </Grid.Column>

        <Grid.Column stretched width={9}>
          <Segment>
            <ContactForm onSubmit={this.handleSubmit} />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

AddressBook.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addressbook: makeSelectAddressBook(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'addressBook', reducer });
const withSaga = injectSaga({ key: 'addressBook', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddressBook);
