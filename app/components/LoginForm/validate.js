const validate = values => ({
  username: !values.username ? 'Required' : undefined,
  password: !values.password ? 'Required' : undefined,
});

export default validate;
