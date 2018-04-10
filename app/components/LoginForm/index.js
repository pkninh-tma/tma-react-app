import React from 'react';
import FormInput from 'components/FormInput';
import PropTypes from 'prop-types';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form/immutable';
import Wrapper from './Wrapper';
import validate from './validate';

const LoginForm = ({ handleSubmit }) => (
  <Wrapper>
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
            </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Field
              name="username"
              type="text"
              component={FormInput}
              label="Username"
            />
            <Field
              name="password"
              type="password"
              component={FormInput}
              label="Password"
            />
            <Button color="teal" fluid size="large">Login</Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="/#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </Wrapper>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  // pristine: PropTypes.any,
  // reset: PropTypes.any,
  // submitting: PropTypes.any,
};

export default reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm);
