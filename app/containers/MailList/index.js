/**
 *
 * MailList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectMailData, makeSelectMailLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import MailItem from 'components/MailItem';
import Spinner from 'components/Spinner';
import { loadMails, mailReaded } from './actions';
import { Table, Checkbox } from 'semantic-ui-react';

export class MailList extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount(){
    this.props.loadData();
  }

  render() {
    const { mailData, loading } = this.props;
    let rows = null;

    if(!loading) {
      rows = mailData.map(item => {
        const { id, from, subject, time, read } = item;
        return <MailItem
          key={id}
          id={id}
          from={from}
          subject={subject}
          time={time}
          read={read === 'true'}
          clicked={this.props.readMailHandler} />
      });
    }
    let mailList = (
      <Table basic selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell collapsing>
              <Checkbox/>
            </Table.HeaderCell>
            <Table.HeaderCell>From</Table.HeaderCell>
            <Table.HeaderCell>Subject</Table.HeaderCell>
            <Table.HeaderCell>Received</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { rows }
        </Table.Body>
      </Table>
    )
    if(loading){
      return (
        <Spinner>{ mailList }</Spinner>
      )
    }

    return mailList;
  }
}

MailList.propTypes = {};

const mapStateToProps = createStructuredSelector({
  mailData: makeSelectMailData(),
  loading: makeSelectMailLoading()
});

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadMails()),
    readMailHandler: (id) => dispatch(mailReaded(id)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'mailList', reducer });
const withSaga = injectSaga({ key: 'mailList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MailList);
