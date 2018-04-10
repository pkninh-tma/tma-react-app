/**
*
* LocaleToggle
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Select from './Select';
import ToggleOption from '../ToggleOption';

const Toggle = ({ onToggle, values, value, messages }) => {
  const getContent = values ? values.map(val => (
    <ToggleOption key={val} value={val} message={messages[val]} />
  )) : (<option>--</option>);

  return (
    <Select value={value} onChange={onToggle}>
      {getContent()}
    </Select>
  );
};

Toggle.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object,
};

export default Toggle;
