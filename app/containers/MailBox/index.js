import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid, Menu, Segment, Label } from 'semantic-ui-react';
import MailList from 'containers/MailList';

const test1 = (props) => (
  <p>This is test 1</p>
);

const test2 = (props) => (
  <p>This is test 2</p>
);

const test3 = (props) => (
  <p>This is test 3</p>
);

class InboxPage extends React.Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    if(name === 'inbox'){
      this.props.history.push(`${this.props.match.url}`);
      return;
    }
    this.props.history.push(`${this.props.match.url}/${name}`);
  }

  render(){

    const { activeItem } = this.state

    return(
      <Grid>
         <Grid.Column width={2}>
           <Menu fluid vertical tabular>
             <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick} >
               <Label color='teal'>1</Label>
               Inbox - All
             </Menu.Item>
             <Menu.Item name='sent' active={activeItem === 'sent'} onClick={this.handleItemClick}>
               <Label>15</Label>
               Sent
             </Menu.Item>
             <Menu.Item name='trash' active={activeItem === 'trash'} onClick={this.handleItemClick}>
               <Label>10</Label>
               Trash
             </Menu.Item>
           </Menu>
         </Grid.Column>

         <Grid.Column stretched width={14}>
           <Segment>
               <Route path={this.props.match.url + "/sent"} component={test2} />
               <Route path={this.props.match.url + "/trash"} component={test3} />
               <Route path={this.props.match.url + "/"} exact component={MailList} />
           </Segment>
         </Grid.Column>
       </Grid>
    );
  }
}

export default InboxPage;
