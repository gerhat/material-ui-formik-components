import React from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withTheme } from '@material-ui/core/styles'
import FormHelperText from '@material-ui/core/FormHelperText'

class FSwitch extends React.PureComponent {
  state = {
    isChecked: this.props.form.values[this.props.field.name]
  }

  render () {
    const {
      label,
      field,
      form: {
        touched,
        errors,
        values,
        setFieldValue
      },
      required,
      fullWidth,
      margin,
      ...other
    } = this.props
    const errorText = errors[field.name]
    const hasError = touched[field.name] && errorText !== undefined
    const errorColor = this.props.theme.palette.error.main
    const labelStyle = hasError ? { color: errorColor } : {}

    return (
      <FormControl
        fullWidth={fullWidth}
        required={required}
        error={hasError}
        {...other}
      >
        <FormControlLabel
          margin={margin}
          control={
            <Switch
              checked={this.state.isChecked}
              value={values[field.name]}
              onChange={event => {
                const isChecked = event.target.checked
                this.setState(
                  { isChecked },
                  () => {
                    setFieldValue(field.name, isChecked)
                  }
                )
              }}
            />
          }
          label={
            <span
              style={labelStyle}
            >
              {label}
            </span>
          }
        />
        {
          hasError &&
          <FormHelperText>{errorText}</FormHelperText>
        }
      </FormControl>
    )
  }
}

FSwitch.propTypes = {
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string
  }),
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
    values: PropTypes.object,
    setFieldValue: PropTypes.func
  }),
  theme: PropTypes.object,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal'])
}

FSwitch.defaultProps = {
  required: false,
  fullWidth: true,
  margin: 'normal'
}

export default withTheme()(FSwitch)
