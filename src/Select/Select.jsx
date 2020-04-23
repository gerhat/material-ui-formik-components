/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import { getIn } from 'formik'

const FSelect = (props) => {
  const {
    label,
    form: { dirty, touched, errors, setFieldValue },
    field: { name, value },
    options,
    margin,
    fullWidth,
    ...other
  } = props
  const id = `sel_${name}`
  const errorText = getIn(errors, name)
  const touchedVal = getIn(touched, name)
  const hasError = dirty && touchedVal && errorText !== undefined

  return (
    <TextField
      select
      label={label}
      error={hasError}
      helperText={hasError ? errorText : ''}
      onChange={(e) => setFieldValue(name, e.target.value)}
      value={value}
      margin={margin}
      fullWidth={fullWidth}
      {...other}
    >
      {options.map((item) => (
        <MenuItem key={`${id}_${item.value}`} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

FSelect.propTypes = {
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
}

FSelect.defaultProps = {
  fullWidth: true,
  margin: 'normal',
}

export default FSelect
