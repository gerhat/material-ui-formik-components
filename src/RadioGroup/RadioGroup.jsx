import React from 'react'
import PropTypes from 'prop-types'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

class FRadioGroup extends React.PureComponent {
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
      options,
      required,
      fullWidth,
      margin,
      ...other
    } = this.props
    const errorText = errors[field.name]
    const hasError = touched[field.name] && errorText !== undefined
    return (
      <FormControl
        component='fieldset'
        fullWidth={fullWidth}
        margin={margin}
        required={required}
        error={hasError}
        {...other}
      >
        <FormLabel>{label}</FormLabel>
        <RadioGroup
          aria-label={label}
          name={field.name}
          value={values[field.name]}
          onChange={event => setFieldValue(field.name, event.target.value)}
        >
          {
            options.map((item, index) =>
              <FormControlLabel
                key={`${item.label}_${index}`}
                value={item.value}
                control={<Radio />}
                label={item.label}
              />
            )
          }
        </RadioGroup>
        {
          hasError &&
          <FormHelperText>{errorText}</FormHelperText>
        }
      </FormControl>
    )
  }
}

FRadioGroup.propTypes = {
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal'])
}

FRadioGroup.defaultProps = {
  options: undefined,
  required: false,
  fullWidth: true,
  margin: 'normal'
}

export default FRadioGroup
