import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import ContactItem from '../../components/ContactItem';

/* eslint-disable no-underscore-dangle */
const ContactList = ({ contacts, clicked }) => {
  const contactItems = contacts.map(contact => (
    <ContactItem
      key={contact._id}
      {...contact}
      clickListener={() => clicked(contact._id)}
    />
  ));

  return (
    <List divided verticalAlign="middle">
      {contactItems}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  clicked: PropTypes.func,
};

export default ContactList;
