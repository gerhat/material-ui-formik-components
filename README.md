# Material-UI Formik Components &middot; [![NPM](https://img.shields.io/npm/v/material-ui-formik-components.svg)](https://www.npmjs.com/package/material-ui-formik-components)

We all love [Material-UI](https://material-ui.com) and [Formik](https://jaredpalmer.com/formik), we just need an easy way to make them work seamlessly together. This library was built just for that.

# Installation

Install the `material-ui-formik-components` package using the following command:

```sh
$ npm install --save material-ui-formik-components
```

## Peer dependencies
You also **MUST** have the following dependencies installed:
- [react](https://www.npmjs.com/package/react) >= 15.0
- [react-dom](https://www.npmjs.com/package/react-dom) >= 15.0
- [Material-UI](https://material-ui.com) >= 3.0
- [Formik](https://jaredpalmer.com/formik) >= 1.0
- [React Select](https://react-select.com) >= 2.0
- [Material-UI Pickers](https://material-ui-pickers.firebaseapp.com/) >= 2.0


# Using the components
The following components are supported:
- `Autocomplete`
- `DateTimePicker` - please make sure you have installed `date-fns`, `moment` or `luxon` see: [Material-UI Pickers / Installation](https://material-ui-pickers.firebaseapp.com/installation)
- `RadioGroup`
- `Select`
- `Switch`
- `TextField`

Below is an example of `TextField` and `Select` components. Code sandbox url: https://codesandbox.io/s/xoplpm1w84
```jsx
import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Select } from "material-ui-formik-components";

class RegistrationForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <Formik
          initialValues={{
            username: "",
            gender: "Male"
          }}
          onSubmit={values => {
            alert(`Username: ${values.username}\nGender: ${values.gender}`);
          }}
          render={props => (
            <Form>
              <Field name="username" label="Username" component={TextField} />
              <Field
                required
                name="gender"
                label="Gender"
                options={[
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                  { value: "Other", label: "Other" }
                ]}
                component={Select}
              />
              <button type="submit" disabled={!props.dirty}>Submit</button>
            </Form>
          )
        />
      </div>
    );
  }
}

export default RegistrationForm;
```

# Example
For a more detailed use of the package, please refer to the code in the [example folder](https://github.com/gerhat/material-ui-formik-components/tree/master/example) of this project.

# License
MIT
