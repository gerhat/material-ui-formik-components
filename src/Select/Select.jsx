import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Select from '@material-ui/core/Select'

class FSelect extends React.PureComponent {
  render () {
    const {
      required,
      label,
      form: { dirty, touched, errors },
      field: { name, onChange, value },
      options,
      fullWidth,
      margin,
      ...other
    } = this.props
    const id = `sel_${name}`
    const errorText = errors[name]
    const hasError = dirty && touched[name] && errorText !== undefined
    return (
      <FormControl
        fullWidth={fullWidth}
        margin={margin}
        required={required}
        error={hasError}
      >
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select
          onChange={onChange}
          value={value}
          required={required}
          inputProps={{
            name: name,
            id: 'input_' + id
          }}
          {...other}
        >
          {
            options.map((item, index) =>
              <MenuItem
                key={id + '_' + index}
                value={item.value}>
                {item.label}
              </MenuItem>
            )
          }
        </Select>
        {
          hasError &&
          <FormHelperText>{errorText}</FormHelperText>
        }
      </FormControl>
    )
  }
}

FSelect.propTypes = {
  required: PropTypes.bool,
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired
    })
  ).isRequired,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal'])
}

FSelect.defaultProps = {
  fullWidth: true,
  margin: 'normal'
}

export default FSelect
