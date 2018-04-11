import React from 'react';
import PropTypes from 'prop-types';
import FormInput from 'components/FormInput';
import { Field, reduxForm } from 'redux-form/immutable';
import { Button, Form, Grid } from 'semantic-ui-react';

function ContactForm(props) {
  const { handleSubmit, isUpdate, // item
    // pristine, reset, submitting
  } = props;
  return (
    <Form onSubmit={handleSubmit}>
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
          <Button>{ isUpdate ? 'Update' : 'Add'}</Button>
        </Grid.Column>
      </Grid>
    </Form>
  );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  isUpdate: PropTypes.bool,
  // item: PropTypes.any,
  // pristine: PropTypes.any,
  // reset: PropTypes.any,
  // submitting: PropTypes.any,
};

export default reduxForm({
  form: 'contactForm',
})(ContactForm);
