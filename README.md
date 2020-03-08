# Material-UI Formik Components &middot; [![NPM](https://img.shields.io/npm/v/material-ui-formik-components.svg)](https://www.npmjs.com/package/material-ui-formik-components) &middot; [![Total Downloads](https://img.shields.io/npm/dt/material-ui-formik-components.svg)](https://www.npmjs.com/package/material-ui-formik-components)
We all love [Material-UI](https://material-ui.com) and [Formik](https://jaredpalmer.com/formik), we just need an easy way to make them work seamlessly together. This library was built just for that.

# Installation
Install the `material-ui-formik-components` package using the following command:

```sh
$ npm install --save material-ui-formik-components
```

## Peer dependencies
The extension depends on the following packages:

**Required**
- [react](https://www.npmjs.com/package/react) >= 16.8
- [react-dom](https://www.npmjs.com/package/react-dom) >= 16.8
- [Material-UI](https://material-ui.com) >= 4.0
- [Formik](https://jaredpalmer.com/formik) >= 2.0

**Optional**
- [Material-UI Lab](https://material-ui.com/components/about-the-lab/) >4.0 - used by `Autocomplete`
- [Material-UI Pickers](https://material-ui-pickers.dev/) >= 3.0 - used by `DatePicker` and `DateTimePicker`
- [material-ui-chip-input](https://github.com/TeamWertarbyte/material-ui-chip-input) >= 1.0 - used by `ChipInput`

# Using the components
The following components are supported:

- `Autocomplete`
- `ChipInput`
- `DatePicker` and `DateTimePicker` - please make sure you have installed `date-fns`, `moment` or `luxon` see: [Material-UI Pickers / Installation](https://material-ui-pickers.dev/getting-started/installation)
- `RadioGroup`
- `Select`
- `Switch`
- `TextField`

Below is an example of `TextField` and `Select` components. Code sandbox url: https://codesandbox.io/s/xoplpm1w84

```jsx
import React from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'material-ui-formik-components/TextField'
import { Select } from 'material-ui-formik-components/Select'

class RegistrationForm extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <Formik
          initialValues={{
            username: '',
            gender: 'Male',
          }}
          onSubmit={values => {
            alert(`Username: ${values.username}\nGender: ${values.gender}`)
          }}
        >
          {formik => (
            <Form>
              <Field name="username" label="Username" component={TextField} />
              <Field
                required
                name="gender"
                label="Gender"
                options={[
                  { value: 'Male', label: 'Male' },
                  { value: 'Female', label: 'Female' },
                  { value: 'Other', label: 'Other' },
                ]}
                component={Select}
              />
              <button type="submit" disabled={!formik.dirty}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default RegistrationForm
```

# Example
For a more detailed use of the package, please refer to the code in the [example folder](https://github.com/gerhat/material-ui-formik-components/tree/master/example) of this project.

# License
MIT
