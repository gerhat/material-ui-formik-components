### [Versions](https://github.com/gerhat/material-ui-formik-components/releases)

## 0.6.2
###### _Apr 23, 2020_
- Fixed initial values not being displayed at AutoComplete. Issue: [(issue: #28)](https://github.com/gerhat/material-ui-formik-components/issues/28)
- Updated examples to demonstrate the `initialValues` prop
- Updated packages to latest versions

## 0.6.1
###### _Mar 29, 2020_
- Package updates for fixing `minimist` security vulnerability

## 0.6.0
###### _Mar 8, 2020_
### General
- Updated library and example packages to the latest versions
- Refactored Formik code in `example/src/SimpleFormExample.jsx` to not use the `render` prop

### Autocomplete
- Replaced `react-select` with `@material-ui/lab/Autocomplete` for improved compatibility

**Breaking changes**
- Prop `isMultiple` has been changed to `multiple`
- Props `label` and `required` must be provided as items in `textFieldProps` props e.g.
```javascript
  textFieldProps={{
    label: 'Country',
    required: true,
    variant: 'outlined',
  }}
```
### Select
- Simplified select component by replacing `@material-ui/core/Select` with `@material-ui/core/TextField` + `select` prop _(see: https://material-ui.com/components/text-fields/#select)_

## 0.5.2
###### _Nov 24, 2019_
- Added missing ts export for `<DatePicker/>` - thanks [@cargallo](https://github.com/cargallo)

## 0.5.1
###### _Nov 09, 2019_
- Implemented `<DatePicker/>` component. Issue: [(issue: #19)](https://github.com/gerhat/material-ui-formik-components/issues/19)

## 0.5.0
###### _Nov 09, 2019_
- Added support for use in Formik's `<FieldArray/>`. Issue: [(issue: #17)](https://github.com/gerhat/material-ui-formik-components/issues/17)
- Added [FieldArray example form](https://github.com/gerhat/material-ui-formik-components/tree/master/example/src/FieldArrayExample.jsx)

## 0.4.1
###### _Sep 16, 2019_
- Updated dependencies to the latest version

## 0.4.0
###### _Jun 2, 2019_
- Added support for `Material UI v4`
- Replaced `material-ui-pickers v2` with `@material-ui/pickers v3`

## 0.3.0
###### _Apr 26, 2019_
- Added `ChipInput` component based on [material-ui-chip-input](https://github.com/TeamWertarbyte/material-ui-chip-input)
- Improved code quality and styling using `eslint-config-airbnb`, `prettier` and `husky`

## 0.2.4
###### _Apr 06, 2019_
- Fixed error in `RadioGroup` PropTypes

## 0.2.3
###### _Apr 06, 2019_
- Added the ability to fully customize `RadioGroup`

## 0.2.2
###### _Mar 20, 2019_
- Resolved `InputProps` ambiguity in `TextField` component [(issue: #6)](https://github.com/gerhat/material-ui-formik-components/issues/6)

## 0.2.1
###### _Mar 19, 2019_
- **Breaking:** Added prop `isMultiple` in `Autocomplete` and set it `false` by default
- Improved example and removed react-scripts

## 0.2.0
###### _Feb 23, 2019_
- Added `DateTimePicker`, `RadioGroup` and `Switch` components
- Added default value for `required` prop
- Updated README
- Minor refactoring in typescript definitions for `OptionsType`

## 0.1.5
###### _Feb 19, 2019_
- Props `fullWidth` and `margin` are not hard-coded anymore
- Fixed `Autocomplete` typescript definitions
- Bumped up `formik` version to 1.5.1 and `react-select` to 2.4.1
- Added information about the example in README

## 0.1.4
###### _Feb 17, 2019_
- **Breaking:** Changed default error behavior. Errors now appear only when the field is `touched` [(issue: #2)](https://github.com/gerhat/material-ui-formik-components/issues/2)
- Added the ability to show error messages in `Select`
- Fixed asterisk not showing in `Autocomplete` label when `required` is `true`
- Error message in `TextField` is now displayed only when there is an error
- Updated devDependencies in `package.json`
- Added validation to the example project
- Updated dependencies in example's `package.json`
- Minor typo in README

## 0.1.3
###### _Jan 10, 2019_
- Added Typescript types
- Minor refactoring in `Autocomplete.jsx` and `Select.jsx`
- Added npm package link to README

## 0.1.2
###### _Sept 20, 2018_
- Fixed a typo in README
- Moved `react-select` to peer dependencies

## 0.1.1
###### _Sept 20, 2018_
- Added `react-dom` to peer dependencies
- Added example to README

## 0.1.0
###### _Sept 18, 2018_
- Initial commit
