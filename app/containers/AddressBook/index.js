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
import { Grid, Segment, Input, Icon, Button } from 'semantic-ui-react';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import { searchInContact, updateContact, startAddContact, putContact, postContact } from './actions';
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

const AddressBook = ({
  loading,
  updating,
  searchKeys,
  updatedItem,
  displayContact,
  searchChangeHandler,
  updateContactHandler,
  swithToAddLayoutHandler,
  onSumitUpdateContact,
  onSumitCreateContact,
}) => (
  <Grid>
    <Grid.Column width={7}>
      <Segment>
        {
          loading
            ? <LoadingIndicator />
            : (<div>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column width={14}>
                      <Input
                        placeholder="Search ..."
                        fluid
                        value={searchKeys}
                        onChange={e => searchChangeHandler(e.target.value)}
                      />
                    </Grid.Column>
                    <Grid.Column width={2}>
                      <Button icon disabled={!updating} onClick={swithToAddLayoutHandler}>
                        <Icon name='add user' />
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
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
          onSubmit={updating ? onSumitUpdateContact : onSumitCreateContact}
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
    swithToAddLayoutHandler: () => dispatch(startAddContact()),
    onSumitUpdateContact: (values) => dispatch(putContact(values)),
    onSumitCreateContact: (values) => dispatch(postContact(values)),
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
