# Material-UI Formik Components &middot; [![NPM](https://img.shields.io/npm/v/material-ui-formik-components.svg)](https://www.npmjs.com/package/material-ui-formik-components)

We all love [Material-UI](https://material-ui.com) and [Formik](https://jaredpalmer.com/formik), we just need an easy way to make them work seamlessly together. This library was built just for that.

# Installation

Install the `material-ui-formik-components` package and its dependencies using the following command:

```sh
$ npm install material-ui-formik-components
```

## Peer dependencies
You also need to have the following dependencies installed:
- [react](https://www.npmjs.com/package/react) >= 15.0
- [react-dom](https://www.npmjs.com/package/react-dom) >= 15.0
- [Material-UI](https://material-ui.com) >= 3.0
- [Formik](https://jaredpalmer.com/formik) >= 1.0
- [react-select](https://react-select.com) >= 2.0


# Using the components
Currently there are three components supported. `TextField`, `Select` and `Autocomplete`. Below is an example of `TextField` and `Select` components. Code sandbox url: https://codesandbox.io/s/xoplpm1w84
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
        >
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
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default RegistrationForm;
```

# License
MIT
