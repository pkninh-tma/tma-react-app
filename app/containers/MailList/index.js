/**
 *
 * MailList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Table, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { lifecycle } from 'recompose';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import MailItem from 'components/MailItem';
import Spinner from 'components/Spinner';
import { makeSelectMailData, makeSelectMailLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { loadMails, mailReaded } from './actions';

const StatelessMailList = ({ mailData, loading, readMailHandler }) => {
  // componentDidMount() {
  //   loadData();
  // }

  // const {  } = this.props;
  const getRows = () => {
    if (!loading) {
      return mailData.map(item => {
        const { id, from, subject, time, read } = item;
        return (<MailItem
          key={id}
          id={id}
          from={from}
          subject={subject}
          time={time}
          read={read === 'true'}
          clicked={readMailHandler}
        />);
      });
    }
    return null;
  };
  const mailList = () => (
    <Table basic selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell collapsing>
            <Checkbox />
          </Table.HeaderCell>
          <Table.HeaderCell>From</Table.HeaderCell>
          <Table.HeaderCell>Subject</Table.HeaderCell>
          <Table.HeaderCell>Received</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {getRows()}
      </Table.Body>
    </Table>
  );
  if (loading) {
    return (
      <Spinner>{mailList()}</Spinner>
    );
  }
  return mailList();
};

StatelessMailList.propTypes = {
  mailData: PropTypes.any,
  loading: PropTypes.any,
  // loadData: PropTypes.any,
  readMailHandler: PropTypes.any,
};

const MailList = lifecycle({
  componentDidMount() {
    this.props.loadData();
  },
})(StatelessMailList);

const mapStateToProps = createStructuredSelector({
  mailData: makeSelectMailData(),
  loading: makeSelectMailLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadMails()),
    readMailHandler: id => dispatch(mailReaded(id)),
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
