import React from 'react';
import { Button, Image, List } from 'semantic-ui-react';

function ContactList(props){
  return (
    <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <p>01231837213</p>
      </List.Content>
      <Image avatar />
      <List.Content>
        <List.Header as='a'>Daniel Louise</List.Header>
        <List.Description>crazy.boy@yahoo.com</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <p>11111111111</p>
      </List.Content>
      <Image avatar />
      <List.Content>
        <List.Header as='a'>Stevie Feliciano</List.Header>
        <List.Description>magical.candy@hotmail.com</List.Description>
      </List.Content>
    </List.Item>
  </List>
  )
}

export default ContactList;
