# Material-UI Formik Components

We all love [Material-UI](https://material-ui.com) and [Formik](https://jaredpalmer.com/formik) we just need an easy way to make them work seamlessly together. This library was build just for that.

# Installation

Install the `material-ui-formik-components` package and its dependencies using the following command:

```sh
$ npm install material-ui-formik-components
```

## Peer dependencies
- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [Material-UI](https://material-ui.com)
- [Formik](https://jaredpalmer.com/formik)


# Using the components

```jsx
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Select } from 'material-ui-formik-components';

export const RegistrationForm = () => (
  <div>
    <h1>Register</h1>
    <Formik
      initialValues={{
        username: '',
        gender: 0
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
            <Field
                name="username"
                label="Userame"
                component={TextField}
            />
            <Field
                required
                name="gender"
                label="Gender"
                options={[
                    {value:0, label: 'Male'},
                    {value:1, label: 'Female'},
                    {value:2, label: 'Not sure'},
                    {value:3, label: 'Other'},
                    {value:4, label: 'Why do you care?'}
                ]}
                component={Select}
            />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

```

# License
MIT