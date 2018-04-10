import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Spinner = ({ children }) => (
  <Segment>
    <Dimmer active>
      <Loader content="Loading" />
    </Dimmer>
    {children}
  </Segment>
);

Spinner.propTypes = {
  children: PropTypes.any,
};

export default Spinner;
