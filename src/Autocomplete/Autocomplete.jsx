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
    flexGrow: 1
  },
  input: {
    display: 'flex',
    padding: 0
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center'
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08
    )
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16
  },
  menu: {
    marginTop: theme.spacing.unit,
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0
  },
  divider: {
    height: theme.spacing.unit * 2
  }
})

const NoOptionsMessage = (props) => (
  <Typography
    color='textSecondary'
    className={props.selectProps.classes.noOptionsMessage}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
)
NoOptionsMessage.propTypes = {
  selectProps: PropTypes.object,
  innerProps: PropTypes.object,
  children: PropTypes.node
}

const inputComponent = ({ inputRef, ...props }) => (
  <div ref={inputRef} {...props} />
)
inputComponent.propTypes = {
  inputRef: PropTypes.func
}

const Control = (props) => (
  <TextField
    fullWidth
    InputProps={{
      inputComponent,
      inputProps: {
        className: props.selectProps.classes.input,
        inputRef: props.innerRef,
        children: props.children,
        ...props.innerProps
      }
    }}
    {...props.selectProps.textFieldProps}
  />
)
Control.propTypes = {
  innerRef: PropTypes.func,
  selectProps: PropTypes.object,
  innerProps: PropTypes.object,
  children: PropTypes.node
}

const Option = (props) => (
  <MenuItem
    buttonRef={props.innerRef}
    selected={props.isFocused}
    component='div'
    style={{
      fontWeight: props.isSelected ? 500 : 400
    }}
    {...props.innerProps}
  >
    {props.children}
  </MenuItem>
)
Option.propTypes = {
  innerRef: PropTypes.func,
  isSelected: PropTypes.bool,
  isFocused: PropTypes.bool,
  innerProps: PropTypes.object,
  children: PropTypes.node
}

const Placeholder = (props) => (
  <Typography
    color='textSecondary'
    className={props.selectProps.classes.placeholder}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
)
Placeholder.propTypes = {
  selectProps: PropTypes.object,
  innerProps: PropTypes.object,
  children: PropTypes.node
}

const SingleValue = (props) => (
  <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
    {props.children}
  </Typography>
)
SingleValue.propTypes = {
  selectProps: PropTypes.object,
  innerProps: PropTypes.object,
  children: PropTypes.node
}

const ValueContainer = (props) => (
  <div className={props.selectProps.classes.valueContainer}>{props.children}</div>
)
ValueContainer.propTypes = {
  selectProps: PropTypes.object,
  children: PropTypes.node
}

const MultiValue = (props) => (
  <Chip
    tabIndex={-1}
    label={props.children}
    className={classNames(props.selectProps.classes.chip, {
      [props.selectProps.classes.chipFocused]: props.isFocused
    })}
    onDelete={event => {
      props.removeProps.onClick()
      props.removeProps.onMouseDown(event)
    }}
  />
)
MultiValue.propTypes = {
  selectProps: PropTypes.object,
  isFocused: PropTypes.bool,
  children: PropTypes.node,
  removeProps: PropTypes.object
}

const Menu = (props) => (
  <Paper
    square
    className={props.selectProps.classes.menu}
    {...props.innerProps}
  >
    {props.children}
  </Paper>
)
Menu.propTypes = {
  selectProps: PropTypes.object,
  innerProps: PropTypes.object,
  children: PropTypes.node
}

const components = {
  Option,
  Control,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  MultiValue,
  ValueContainer,
  Menu
}

class Autocomplete extends React.PureComponent {
  render () {
    const {
      required,
      classes,
      theme,
      label,
      field,
      form: {
        dirty,
        touched,
        errors,
        values,
        setFieldValue
      },
      options,
      ...other
    } = this.props
    const errorText = errors[field.name]
    const hasError = dirty && touched[field.name] && errorText !== undefined

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary
      })
    }

    return (
      <div className={classes.root}>
        <FormControl
          error={hasError}
          required={required}
          {...other}
        >
          <Select
            classes={classes}
            styles={selectStyles}
            required={required}
            textFieldProps={{
              required: required,
              label: label,
              error: hasError,
              InputLabelProps: {
                shrink: true
              }
            }}
            options={options}
            components={components}
            onChange={value => setFieldValue(field.name, value)}
            value={values[field.name]}
            isMulti
          />
          {
            hasError &&
            <FormHelperText>{errorText}</FormHelperText>
          }
        </FormControl>
      </div>
    )
  }
}

Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.shape({
    dirty: PropTypes.bool,
    errors: PropTypes.object,
    setFieldValue: PropTypes.func
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

Autocomplete.defaultProps = {
  fullWidth: true,
  margin: 'normal'
}

export default withStyles(styles, { withTheme: true })(Autocomplete)
