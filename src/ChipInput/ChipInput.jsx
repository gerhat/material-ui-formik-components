import React from 'react'
import PropTypes from 'prop-types'
import ChipInput from 'material-ui-chip-input'

class FChipInput extends React.PureComponent {
  handleAddChip = chip => {
    const {
      form: { values, setFieldValue },
      field: { name },
    } = this.props

    const value = [...values[name], chip]
    setFieldValue(name, value)
  }

  handleDeleteChip = (chip, index) => {
    const {
      form: { values, setFieldValue },
      field: { name },
    } = this.props

    const value = values[name].filter((val, idx) => idx !== index)
    setFieldValue(name, value)
  }

  render() {
    const {
      required,
      form: { dirty, touched, errors, values },
      field: { name },
      options,
      ...other
    } = this.props
    const id = `chip_${name}`
    const errorText = errors[name]
    const hasError = dirty && touched[name] && errorText !== undefined

    return (
      <ChipInput
        required={required}
        value={values[name]}
        InputProps={{
          name,
          id: `input_${id}`,
        }}
        onAdd={this.handleAddChip}
        onDelete={this.handleDeleteChip}
        helperText={hasError ? errorText : ''}
        error={hasError}
        {...other}
      />
    )
  }
}

FChipInput.propTypes = {
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  form: PropTypes.shape({
    dirty: PropTypes.bool,
    errors: PropTypes.object,
  }).isRequired,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  newChipKeyCodes: PropTypes.arrayOf(PropTypes.number),
}

FChipInput.defaultProps = {
  label: '',
  fullWidth: true,
  margin: 'normal',
  // http://gcctech.org/csc/javascript/javascript_keycodes.htm
  // Enter, Space, Comma
  newChipKeyCodes: [13, 32, 188],
}

export default FChipInput
