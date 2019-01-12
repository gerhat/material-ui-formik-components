# Material-UI Formik Components &middot; [![NPM](https://img.shields.io/npm/v/material-ui-formik-components.svg)](https://www.npmjs.com/package/material-ui-formik-components)

We all love <a href="https://material-ui.com" target="_blank">Material-UI</a> and <a href="https://jaredpalmer.com/formik" target="_blank">Formik</a>, we just need an easy way to make them work seamlessly together. This library was built just for that.

# Installation

Install the `material-ui-formik-components` package and its dependencies using the following command:

```sh
$ npm install material-ui-formik-components
```

## Peer dependencies
You also need to have the following dependencies installed:
- <a href="https://www.npmjs.com/package/react" target="_blank">react</a> >= 15.0
- <a href="https://www.npmjs.com/package/react-dom" target="_blank">react-dom</a> >= 15.0
- <a href="https://material-ui.com" target="_blank">Material-UI</a> >= 3.0
- <a href="https://jaredpalmer.com/formik" target="_blank">Formik</a> >= 1.0
- <a href="https://react-select.com" target="_blank">react-select</a> >= 2.0


# Using the components
Currently there are three components supported. `TextField`, `Select` and `Autocomplete`. Below is an example of `TextField` and `Select` components. Code sandbox url: <a href="https://codesandbox.io/s/xoplpm1w84" target="_blank">https://codesandbox.io/s/xoplpm1w84</a>
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
          qonSubmit={values => {
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
