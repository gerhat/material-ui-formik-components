import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Autocomplete, TextField, Select } from 'material-ui-formik-components'
import countries from './countries.json'

class RegistrationForm extends React.Component {
  render () {
    return (
      <div>
        <h1>Register</h1>
        <Formik
          initialValues={{
            username: '',
            gender: 'Male',
            countries: []
          }}
          onSubmit={values => {
            alert(
              `Username: ${values.username}\nGender: ${
                values.gender
              }\nCountries: ${values.countries.map(v => v.label).join(',')}`
            )
          }}
        >
          <Form>
            <Field name='username' label='Username' component={TextField} />
            <Field
              required
              name='gender'
              label='Gender'
              options={[
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
                { value: 'Other', label: 'Other' }
              ]}
              component={Select}
            />
            <Field
              name='countries'
              label='Countries'
              options={countries}
              component={Autocomplete}
            />
            <button type='submit'>Submit</button>
          </Form>
        </Formik>
      </div>
    )
  }
}

export default RegistrationForm
