import React from 'react';
import { Route } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { switchToMailBox } from './actions';
import { makeSelectActiveItem, makeSelectMenuItems } from './selectors';

import injectReducer from '../../utils/injectReducer';

import MailboxMenu from '../../components/MailboxMenu';
import MailList from '../../containers/MailList';

import reducer from './reducer';

const Mailbox = ({ activeItem, menuItems, switchMailboxEventHandler, match: { url } }) => (
  <Grid>
    <Grid.Column width={2}>
      <MailboxMenu
        activeItem={activeItem}
        menuItems={menuItems}
        rootUrl={url}
        clickEvent={switchMailboxEventHandler}
      />
    </Grid.Column>

    <Grid.Column stretched width={14}>
      <Segment>
        <Route path={`${url}/sent`} component={() => (<p>Sent</p>)}/>
        <Route path={`${url}/trash`} component={() => (<p>Trash</p>)} />
        <Route path={`${url}/`} exact component={MailList} />
      </Segment>
    </Grid.Column>
  </Grid>
);


Mailbox.propTypes = {
  activeItem: PropTypes.string,
  menuItems: PropTypes.array,
  switchMailboxEventHandler: PropTypes.func,
  match: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  activeItem: makeSelectActiveItem(),
  menuItems: makeSelectMenuItems(),
});

function mapDispatchToProps(dispatch) {
  return {
    switchMailboxEventHandler: boxName => dispatch(switchToMailBox(boxName)),
  };
}

const withReducer = injectReducer({ key: 'mailbox', reducer });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withReducer,
  withConnect,
)(Mailbox);
