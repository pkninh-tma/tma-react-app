import React from 'react';
import FormInput from 'components/FormInput';
import { Field, reduxForm } from 'redux-form/immutable';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

function ContactForm (props) {
  const { handleSubmit, pristine, reset, submitting } = props;
  return(
    <Form onSubmit = {handleSubmit}>
      <Grid columns={2} stackable>
        <Grid.Column>
          <Field
            name="firstName"
            type="text"
            icon="users"
            component={FormInput}
            label="First Name"
          />
        </Grid.Column>
        <Grid.Column>
          <Field
            name="lastName"
            type="text"
            icon="users"
            component={FormInput}
            label="Last Name"
          />
        </Grid.Column>
        <Grid.Column>
          <Field
            name="phone"
            type="tel"
            icon="phone"
            component={FormInput}
            label="Phone Number"
          />
        </Grid.Column>
        <Grid.Column>
          <Field
            name="mail"
            type="mail"
            icon="mail"
            component={FormInput}
            label="Mail Address"
          />
        </Grid.Column>
        <Grid.Column>
          <Button>Save</Button>
        </Grid.Column>
      </Grid>
    </Form>
  )
}

export default reduxForm({
  form: 'contactForm',
})(ContactForm);
