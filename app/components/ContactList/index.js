import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import ContactItem from 'components/ContactItem';

function ContactList(props) {
  const contactItems = props.contacts.map(contact => (
    <ContactItem key={contact.email} {...contact} />
  ));

  return (
    <List divided verticalAlign="middle">
      {contactItems}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
