/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes, { bool } from 'prop-types'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import { getIn } from 'formik'

class FRadioGroup extends React.PureComponent {
  render() {
    const {
      label,
      field,
      form: { touched, errors, setFieldValue },
      options,
      required,
      fullWidth,
      margin,
      classes,
      groupProps,
      ...other
    } = this.props
    const errorText = getIn(errors, field.name)
    const touchedVal = getIn(touched, field.name)
    const hasError = touchedVal && errorText !== undefined
    return (
      <FormControl
        component="fieldset"
        fullWidth={fullWidth}
        margin={margin}
        required={required}
        error={hasError}
        className={classes && classes.formControl ? classes.formControl : ''}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...other}
      >
        <FormLabel
          className={classes && classes.formLabel ? classes.formLabel : ''}
        >
          {label}
        </FormLabel>
        <RadioGroup
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...groupProps}
          aria-label={label}
          name={field.name}
          value={field.value}
          onChange={(event) => setFieldValue(field.name, event.target.value)}
          className={classes && classes.radioGroup ? classes.radioGroup : ''}
        >
          {options.map((item) => (
            <FormControlLabel
              key={`${item.label}_${item.value}`}
              value={item.value}
              control={
                <Radio
                  className={classes && classes.radio ? classes.radio : ''}
                />
              }
              label={item.label}
              className={
                classes && classes.formControlLabel
                  ? classes.formControlLabel
                  : ''
              }
            />
          ))}
        </RadioGroup>
        {hasError && (
          <FormHelperText
            className={
              classes && classes.formHelperText ? classes.formHelperText : ''
            }
          >
            {errorText}
          </FormHelperText>
        )}
      </FormControl>
    )
  }
}

FRadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
    setFieldValue: PropTypes.func,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  classes: PropTypes.shape({
    formControl: PropTypes.string,
    formLabel: PropTypes.string,
    radioGroup: PropTypes.string,
    formControlLabel: PropTypes.string,
    radio: PropTypes.string,
    formHelperText: PropTypes.string,
  }),
  groupProps: PropTypes.shape({
    row: bool,
  }),
}

FRadioGroup.defaultProps = {
  required: false,
  fullWidth: true,
  margin: 'normal',
  classes: undefined,
  groupProps: undefined,
}

export default FRadioGroup
