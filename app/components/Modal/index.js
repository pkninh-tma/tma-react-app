import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Modal } from 'semantic-ui-react';

const inlineStyle = {
  modal: {
    marginTop: '0px !important',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const MyModal = ({ showed, description, onClose, btnLabel }) => (
  <Modal open={showed} style={inlineStyle.modal} basic size="small">
    <Modal.Content>
      <h3>{description}</h3>
    </Modal.Content>
    <Modal.Actions>
      <Button color="green" onClick={onClose} inverted>
        <Icon name="checkmark" />
        {btnLabel}
      </Button>
    </Modal.Actions>
  </Modal>
);

MyModal.propTypes = {
  showed: PropTypes.any,
  description: PropTypes.any,
  onClose: PropTypes.func,
  btnLabel: PropTypes.any,
};

export default MyModal;
