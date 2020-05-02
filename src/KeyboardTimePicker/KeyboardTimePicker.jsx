import React from 'react'
import PropTypes from 'prop-types'
import { KeyboardTimePicker } from '@material-ui/pickers'
import { getIn } from 'formik'

const FKeyboardTimePicker = (props) => {
  const {
    label,
    field,
    form: { touched, errors, setFieldValue },
    ...other
  } = props
  const errorText = getIn(errors, field.name)
  const touchedVal = getIn(touched, field.name)
  const hasError = touchedVal && errorText !== undefined
  return (
    <KeyboardTimePicker
      label={label}
      error={hasError}
      helperText={hasError ? errorText : ''}
      onChange={(value) => setFieldValue(field.name, value)}
      value={field.value}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    />
  )
}

FKeyboardTimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any,
  }).isRequired,
  form: PropTypes.shape({
    dirty: PropTypes.bool,
    errors: PropTypes.object,
  }).isRequired,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  autoOk: PropTypes.bool,
}

FKeyboardTimePicker.defaultProps = {
  fullWidth: true,
  margin: 'normal',
  autoOk: true,
}

export default FKeyboardTimePicker
