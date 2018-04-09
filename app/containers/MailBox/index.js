import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid, Menu, Segment, Label } from 'semantic-ui-react';
import { switchToMailBox } from './actions';
import { connect } from 'react-redux';
import { makeSelectActiveItem, makeSelectMenuItems } from './selectors';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

import MailboxMenu from 'components/MailboxMenu';
import MailList from 'containers/MailList';

class Mailbox extends React.Component {

  render() {
    const { activeItem, menuItems, switchMailboxEventHandler } = this.props
    return (
      <Grid>
         <Grid.Column width={2}>
           <MailboxMenu
             activeItem = { activeItem }
             menuItems= { menuItems }
             rootUrl= { this.props.match.url }
             clickEvent = { switchMailboxEventHandler }
           />
         </Grid.Column>

         <Grid.Column stretched width={14}>
           <Segment>
               <Route path={this.props.match.url + "/sent"} component={()=>(<p>Sent</p>)} />
               <Route path={this.props.match.url + "/trash"} component={()=>(<p>Trash</p>)} />
               <Route path={this.props.match.url + "/"} exact component={MailList} />
           </Segment>
         </Grid.Column>
       </Grid>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  activeItem: makeSelectActiveItem(),
  menuItems: makeSelectMenuItems(),
})

function mapDispatchToProps(dispatch){
  return {
    switchMailboxEventHandler: (boxName) => dispatch(switchToMailBox(boxName)),
  }
}

const withReducer = injectReducer({ key: 'mailbox', reducer });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withReducer,
  withConnect,
)(Mailbox);
