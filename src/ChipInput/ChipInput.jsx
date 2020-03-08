import React from 'react'
import PropTypes from 'prop-types'
import ChipInput from 'material-ui-chip-input'
import { getIn } from 'formik'

class FChipInput extends React.PureComponent {
  handleAddChip = chip => {
    const {
      form: { setFieldValue },
      field: { name, value },
    } = this.props

    const newValue = [...value, chip]
    setFieldValue(name, newValue)
  }

  handleDeleteChip = (chip, index) => {
    const {
      form: { setFieldValue },
      field: { name, value },
    } = this.props

    const newValue = value.filter((val, idx) => idx !== index)
    setFieldValue(name, newValue)
  }

  render() {
    const {
      required,
      form: { dirty, touched, errors },
      field: { name, value },
      options,
      fullWidth,
      margin,
      ...other
    } = this.props

    const id = `chip_${name}`
    const errorText = getIn(errors, name)
    const touchedVal = getIn(touched, name)
    const hasError = dirty && touchedVal && errorText !== undefined

    return (
      <ChipInput
        required={required}
        value={value}
        InputProps={{
          name,
          id: `input_${id}`,
        }}
        onAdd={this.handleAddChip}
        onDelete={this.handleDeleteChip}
        helperText={hasError ? errorText : ''}
        error={hasError}
        margin={margin}
        fullWidth={fullWidth}
        // eslint-disable-next-line react/jsx-props-no-spreading
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
