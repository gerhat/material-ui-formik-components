import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

class FTextField extends React.Component {
  render () {
    const { label, field, form: { dirty, errors }, inputProps, ...other } = this.props
    const errorText = errors[field.name]
    const hasError = dirty && errorText !== undefined
    return (
      <TextField
        label={label}
        fullWidth
        margin='normal'
        error={hasError}
        helperText={errorText || ''}
        {...field}
        {...other}
        InputProps={inputProps}
      />
    )
  }
}

FTextField.propTypes = {
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }),
  form: PropTypes.shape({
    dirty: PropTypes.bool,
    errors: PropTypes.object
  }),
  inputProps: PropTypes.object
}

export default FTextField
