import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { StatelessMailList } from '../app/containers/MailList';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

const props = {
  mailData: [{ from: 'ABC', subject: 'XYZ', time: '123' }],
  loading: false,
  readMailHandler: () => console.log('mail list read handler'),
};

storiesOf('MailList', module)
  .add('simple', () => (
    <StatelessMailList {...props} />
  ))
  .add('loading', () => (
    <StatelessMailList {...props} loading />
  ));
