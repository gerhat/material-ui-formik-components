/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withTheme } from '@material-ui/core/styles'
import FormHelperText from '@material-ui/core/FormHelperText'
import { getIn } from 'formik'

class FSwitch extends React.PureComponent {
  render() {
    const {
      label,
      field,
      form: { touched, errors, setFieldValue },
      required,
      fullWidth,
      margin,
      theme,
      ...other
    } = this.props

    const errorText = getIn(errors, field.name)
    const touchedVal = getIn(touched, field.name)
    const hasError = touchedVal && errorText !== undefined
    const errorColor = theme.palette.error.main
    const labelStyle = hasError ? { color: errorColor } : {}

    const controlProps = {
      checked: field.value || false,
      onChange: (event) => {
        setFieldValue(field.name, event.target.checked)
      },
    }

    return (
      <FormControl
        fullWidth={fullWidth}
        required={required}
        error={hasError}
        {...other}
      >
        <FormControlLabel
          margin={margin}
          control={<Switch {...controlProps} />}
          label={<span style={labelStyle}>{label}</span>}
        />
        {hasError && <FormHelperText>{errorText}</FormHelperText>}
      </FormControl>
    )
  }
}

FSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
    values: PropTypes.object,
    setFieldValue: PropTypes.func,
  }).isRequired,
  theme: PropTypes.shape({ palette: PropTypes.object }),
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
}

FSwitch.defaultProps = {
  theme: {},
  required: false,
  fullWidth: true,
  margin: 'normal',
}

export default withTheme(FSwitch)
