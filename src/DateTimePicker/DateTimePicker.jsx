import React from 'react'
import PropTypes from 'prop-types'
import { DateTimePicker } from '@material-ui/pickers'

class FDateTimePicker extends React.PureComponent {
  render() {
    const {
      label,
      field,
      form: { touched, errors, values, setFieldValue },
      ...other
    } = this.props
    const errorText = errors[field.name]
    const hasError = touched[field.name] && errorText !== undefined
    return (
      <DateTimePicker
        label={label}
        error={hasError}
        helperText={hasError ? errorText : ''}
        onChange={value => setFieldValue(field.name, value)}
        value={values[field.name]}
        {...other}
      />
    )
  }
}

FDateTimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    dirty: PropTypes.bool,
    errors: PropTypes.object,
  }).isRequired,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  ampm: PropTypes.bool,
  autoOk: PropTypes.bool,
}

FDateTimePicker.defaultProps = {
  fullWidth: true,
  margin: 'normal',
  ampm: false,
  autoOk: true,
}

export default FDateTimePicker
