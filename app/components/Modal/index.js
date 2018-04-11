import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const inlineStyle = {
  modal : {
    marginTop: '0px !important',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

function MyModal(props) {
  const { showed, description, onClose, btnLabel} = props;
  return (
    <Modal open={showed} style={inlineStyle.modal} basic size="small">
    <Modal.Content>
      <h3>{description}</h3>
    </Modal.Content>
    <Modal.Actions>
      <Button color='green' onClick={onClose} inverted>
        <Icon name='checkmark' />
        {btnLabel}
      </Button>
    </Modal.Actions>
  </Modal>
  )
}

export default MyModal;
