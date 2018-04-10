import React from 'react';
import PropTypes from 'prop-types';
import { Image, List } from 'semantic-ui-react';

function ContactItem(props) {
  const { firstName, lastName, email, phoneNumber } = props;
  return (
    <List.Item onClick={props.clickListener}>
      <List.Content floated="right">
        <p>{phoneNumber}</p>
      </List.Content>
      <Image avatar />
      <List.Content>
        <List.Header as="a">{`${firstName} ${lastName}`}</List.Header>
        <List.Description>{email}</List.Description>
      </List.Content>
    </List.Item>
  );
}

ContactItem.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  clickListener: PropTypes.func,
};

export default ContactItem;
