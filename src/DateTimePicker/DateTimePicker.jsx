import React from 'react'
import PropTypes from 'prop-types'
import { DateTimePicker } from '@material-ui/pickers'
import { getIn } from 'formik'

class FDateTimePicker extends React.PureComponent {
  render() {
    const {
      label,
      field,
      form: { touched, errors, setFieldValue },
      ...other
    } = this.props
    const errorText = getIn(errors, field.name)
    const touchedVal = getIn(touched, field.name)
    const hasError = touchedVal && errorText !== undefined
    return (
      <DateTimePicker
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
}

FDateTimePicker.propTypes = {
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
