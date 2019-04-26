import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const FTextField = ({
  label,
  field,
  form: { dirty, touched, errors },
  ...other
}) => {
  const errorText = errors[field.name]
  const hasError = dirty && touched[field.name] && errorText !== undefined
  return (
    <TextField
      label={label}
      error={hasError}
      helperText={hasError ? errorText : ''}
      {...field}
      {...other}
    />
  )
}

FTextField.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  form: PropTypes.shape({
    dirty: PropTypes.bool,
    errors: PropTypes.object,
  }).isRequired,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
}

FTextField.defaultProps = {
  fullWidth: true,
  margin: 'normal',
}

export default FTextField
