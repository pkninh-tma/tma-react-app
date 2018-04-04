import React from 'react';
import Wrapper from './Wrapper';
import FormInput from 'components/FormInput';
import validate from './validate';
import { Field, reduxForm } from 'redux-form/immutable';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

function LoginForm (props) {
  const { handleSubmit, pristine, reset, submitting } = props;
  return(
    <Wrapper>
      <Grid textAlign="center"
            style={{ height: '100%'}}
            verticalAlign="middle" >
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
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
    </Wrapper>
  )
}

export default reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm);
