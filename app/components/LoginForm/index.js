import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form/immutable';
import FormInput from '../../components/FormInput';
// import Wrapper from './Wrapper';
import validate from './validate';

const LoginForm = ({ handleSubmit, errorMsg }) => (
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div,
      body > div > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        { errorMsg ? (
          <Message negative>
            <Message.Header>{errorMsg}</Message.Header>
          </Message>)
          : null
        }
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Field
              name="username"
              type="text"
              icon="users"
              component={FormInput}
              label="Username"
            />
            <Field
              name="password"
              type="password"
              icon="key"
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
  </div>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  errorMsg: PropTypes.string,
  // pristine: PropTypes.any,
  // reset: PropTypes.any,
  // submitting: PropTypes.any,
};

export default reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm);
