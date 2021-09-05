import TextField from '@material-ui/core/TextField';
import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputFeild.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  lable: PropTypes.string,
  disable: PropTypes.bool,
};

function InputFeild(props) {
  const { form, name, label, disable } = props;
  const { control } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
        <TextField
          variant="outlined"
          margin="normal"
          name={name}
          label={label}
          disabled={disable}
          onChange={onChange}
          onBlur={onBlur}
          fullWidth
          value={value}
          error={invalid}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default InputFeild;
