import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const Spinner = (props) => (
  <Segment>
    <Dimmer active>
      <Loader content='Loading' />
    </Dimmer>
    { props.children }
  </Segment>
);

export default Spinner;
