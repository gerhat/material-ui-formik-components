/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Select from 'react-select'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import MenuItem from '@material-ui/core/MenuItem'
import { emphasize } from '@material-ui/core/styles/colorManipulator'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  menu: {
    marginTop: theme.spacing.unit,
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
})

const NoOptionsMessage = ({ selectProps, innerProps, children }) => (
  <Typography
    color="textSecondary"
    className={selectProps.classes.noOptionsMessage}
    {...innerProps}
  >
    {children}
  </Typography>
)
NoOptionsMessage.propTypes = {
  selectProps: PropTypes.object,
  innerProps: PropTypes.object,
  children: PropTypes.node,
}

const inputComponent = ({ inputRef, ...props }) => (
  <div ref={inputRef} {...props} />
)
inputComponent.propTypes = {
  inputRef: PropTypes.func,
}

const Control = ({ selectProps, innerRef, children, innerProps }) => (
  <TextField
    fullWidth
    InputProps={{
      inputComponent,
      inputProps: {
        className: selectProps.classes.input,
        inputRef: innerRef,
        children,
        ...innerProps,
      },
    }}
    {...selectProps.textFieldProps}
  />
)
Control.propTypes = {
  innerRef: PropTypes.func,
  selectProps: PropTypes.object,
  innerProps: PropTypes.object,
  children: PropTypes.node,
}

const Option = ({ innerRef, isFocused, isSelected, innerProps, children }) => (
  <MenuItem
    buttonRef={innerRef}
    selected={isFocused}
    component="div"
    style={{
      fontWeight: isSelected ? 500 : 400,
    }}
    {...innerProps}
  >
    {children}
  </MenuItem>
)
Option.propTypes = {
  innerRef: PropTypes.func,
  isSelected: PropTypes.bool,
  isFocused: PropTypes.bool,
  innerProps: PropTypes.object,
  children: PropTypes.node,
}

const Placeholder = ({ selectProps, innerProps, children }) => (
  <Typography
    color="textSecondary"
    className={selectProps.classes.placeholder}
    {...innerProps}
  >
    {children}
  </Typography>
)
Placeholder.propTypes = {
  selectProps: PropTypes.object,
  innerProps: PropTypes.object,
  children: PropTypes.node,
}

const SingleValue = ({ selectProps, innerProps, children }) => (
  <Typography className={selectProps.classes.singleValue} {...innerProps}>
    {children}
  </Typography>
)
SingleValue.propTypes = {
  selectProps: PropTypes.object,
  innerProps: PropTypes.object,
  children: PropTypes.node,
}

const ValueContainer = ({ selectProps, children }) => (
  <div className={selectProps.classes.valueContainer}>{children}</div>
)
ValueContainer.propTypes = {
  selectProps: PropTypes.object,
  children: PropTypes.node,
}

const MultiValue = ({ selectProps, children, isFocused, removeProps }) => (
  <Chip
    tabIndex={-1}
    label={children}
    className={classNames(selectProps.classes.chip, {
      [selectProps.classes.chipFocused]: isFocused,
    })}
    onDelete={event => {
      removeProps.onClick()
      removeProps.onMouseDown(event)
    }}
  />
)
MultiValue.propTypes = {
  selectProps: PropTypes.object,
  isFocused: PropTypes.bool,
  children: PropTypes.node,
  removeProps: PropTypes.object,
}

const Menu = ({ selectProps, innerProps, children }) => (
  <Paper square className={selectProps.classes.menu} {...innerProps}>
    {children}
  </Paper>
)
Menu.propTypes = {
  selectProps: PropTypes.object,
  innerProps: PropTypes.object,
  children: PropTypes.node,
}

const components = {
  Option,
  Control,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  MultiValue,
  ValueContainer,
  Menu,
}

class Autocomplete extends React.PureComponent {
  render() {
    const {
      required,
      classes,
      theme,
      label,
      field,
      form: { dirty, touched, errors, values, setFieldValue },
      options,
      isMultiple,
      ...other
    } = this.props
    const errorText = errors[field.name]
    const hasError = dirty && touched[field.name] && errorText !== undefined

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
      }),
    }

    return (
      <div className={classes.root}>
        <FormControl error={hasError} required={required} {...other}>
          <Select
            classes={classes}
            styles={selectStyles}
            required={required}
            textFieldProps={{
              required,
              label,
              error: hasError,
              InputLabelProps: {
                shrink: true,
              },
            }}
            options={options}
            components={components}
            onChange={value => setFieldValue(field.name, value)}
            value={values[field.name]}
            isMulti={isMultiple}
          />
          {hasError && <FormHelperText>{errorText}</FormHelperText>}
        </FormControl>
      </div>
    )
  }
}

Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  label: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.shape({
    dirty: PropTypes.bool,
    errors: PropTypes.object,
    setFieldValue: PropTypes.func,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  isMultiple: PropTypes.bool,
}

Autocomplete.defaultProps = {
  required: false,
  fullWidth: true,
  margin: 'normal',
  isMultiple: false,
}

export default withStyles(styles, { withTheme: true })(Autocomplete)
