import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

function FormInput (props) {
  const { input, type, label, icon, meta: { touched, error } } = props;
  return (
    <Form.Field>
      <div className="ui left icon input">
        <input {...input} type={type} placeholder={label} />
        <i className={`${icon} icon`}></i>
      </div>
      {touched && error && <span>{error}</span>}
    </Form.Field>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default FormInput;
