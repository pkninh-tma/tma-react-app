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
import { Grid, Segment, Input } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { searchInContact, updateContact } from './actions';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import {
  makeSelectContactFiltered,
  makeSelectLoading,
  makeSelectSearchKeys,
  makeSelectUpdating,
  makeSelectUpdatedItem,
} from './selectors';

import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import LoadingIndicator from '../../components/LoadingIndicator';

const AddressBook = ({ loading, displayContact, searchKeys, updating, updatedItem, searchChangeHandler, updateContactHandler }) => (
  <Grid>
    <Grid.Column width={7}>
      <Segment>
        {
          loading
            ? <LoadingIndicator />
            : (
              <div>
                <Input
                  placeholder="Search ..."
                  fluid
                  value={searchKeys}
                  onChange={e => searchChangeHandler(e.target.value)}
                />
                <ContactList
                  contacts={displayContact}
                  clicked={updateContactHandler}
                />
              </div>
            )
        }
      </Segment>
    </Grid.Column>

    <Grid.Column stretched width={9}>
      <Segment>
        <ContactForm
          onSubmit={() => console.log('TODO: Implement on submit()')}
          isUpdate={updating}
          item={updatedItem}
        />
      </Segment>
    </Grid.Column>
  </Grid>
);

AddressBook.propTypes = {
  displayContact: PropTypes.array,
  loading: PropTypes.bool,
  searchKeys: PropTypes.string,
  searchChangeHandler: PropTypes.func,
  updating: PropTypes.any,
  updatedItem: PropTypes.any,
  updateContactHandler: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  displayContact: makeSelectContactFiltered(),
  loading: makeSelectLoading(),
  searchKeys: makeSelectSearchKeys(),
  updating: makeSelectUpdating(),
  updatedItem: makeSelectUpdatedItem(),
});

function mapDispatchToProps(dispatch) {
  return {
    searchChangeHandler: val => dispatch(searchInContact(val)),
    updateContactHandler: id => dispatch(updateContact(id)),
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
