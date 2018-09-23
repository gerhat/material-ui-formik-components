import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

class FSelect extends React.PureComponent {
  render () {
    const {
      required,
      label,
      field: { name, onChange, value },
      options,
      ...other
    } = this.props
    const id = `sel_${name}`
    return (
      <FormControl
        fullWidth
        required={required}
        style={{ marginTop: '16px', marginBottom: '8px' }}
      >
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select
          onChange={onChange}
          value={value}
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
  ).isRequired
}

export default FSelect
