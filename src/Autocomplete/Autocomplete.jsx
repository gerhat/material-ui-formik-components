/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { getIn } from 'formik'

const FAutocomplete = (props) => {
  const {
    field,
    form: { dirty, touched, errors, setFieldValue },
    options,
    getOptionLabel,
    textFieldProps,
    ...autoCompleteProps
  } = props

  // Merge default textFieldProps with textFieldProps passed in the component
  const mergedTextFieldProps = {
    ...FAutocomplete.defaultProps.textFieldProps,
    ...textFieldProps,
  }
  const errorText = getIn(errors, field.name)
  const touchedVal = getIn(touched, field.name)
  const hasError = dirty && touchedVal && errorText !== undefined

  return (
    <Autocomplete
      options={options}
      getOptionLabel={getOptionLabel}
      onChange={(_, value) => setFieldValue(field.name, value)}
      value={field.value}
      getOptionSelected={(option, val) => option.value === val.value}
      renderInput={(params) => (
        <TextField
          {...params}
          error={hasError}
          helperText={hasError ? errorText : ''}
          {...mergedTextFieldProps}
        />
      )}
      {...autoCompleteProps}
    />
  )
}

FAutocomplete.propTypes = {
  form: PropTypes.shape({
    dirty: PropTypes.bool,
    errors: PropTypes.object,
    setFieldValue: PropTypes.func,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  getOptionLabel: PropTypes.func,
  textFieldProps: PropTypes.shape({
    label: PropTypes.string,
    required: PropTypes.bool,
    fullWidth: PropTypes.bool,
    margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  }),
}

FAutocomplete.defaultProps = {
  getOptionLabel: (option) => option.label,
  textFieldProps: {
    required: false,
    fullWidth: true,
    margin: 'normal',
  },
}

export default FAutocomplete
