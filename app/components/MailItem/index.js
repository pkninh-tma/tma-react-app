import React from 'react';
import PropTypes from 'prop-types';
import { Table, Checkbox } from 'semantic-ui-react';

function MailItem(props){
  const { id, read, from, subject, time, clicked } = props;
  return(
    <Table.Row active={ read } onClick={ () => clicked(id) }>
      <Table.Cell collapsing>
        <Checkbox />
      </Table.Cell>
      <Table.Cell>{ from }</Table.Cell>
      <Table.Cell>{ subject }</Table.Cell>
      <Table.Cell>{ time }</Table.Cell>
    </Table.Row>
  )
}

MailItem.propTypes = {
  from: PropTypes.string,
  read: PropTypes.bool,
  subject: PropTypes.string,
  time: PropTypes.string
};

export default MailItem;
