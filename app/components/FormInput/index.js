import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

function FormInput(props) {
  const { input, label, type, meta: { touched, error } } = props;
  return (
    <Form.Field>
      <label htmlFor="input">{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </Form.Field>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.any,
  meta: PropTypes.any,
};

export default FormInput;
