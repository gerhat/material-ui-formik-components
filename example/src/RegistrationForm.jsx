import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Autocomplete, TextField, Select } from 'material-ui-formik-components'
import { object, string, array } from 'yup'
import countries from './countries.json'

const validationSchema = object().shape({
  username: string().required('Username is required'),
  gender: string().required('Gender selection is required'),
  countries: array().required('At least one country is required')
})

const initialValues = {
  username: '',
  gender: '',
  countries: []
}

class RegistrationForm extends React.Component {
  render () {
    return (
      <div>
        <h1>Register</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnChange
          onSubmit={values => {
            alert(
              `Username: ${values.username}\nGender: ${
                values.gender
              }\nCountries: ${values.countries.map(v => v.label).join(',')}`
            )
          }}
          render={props => (
            <Form noValidate autoComplete='off'>
              <Field
                required
                name='username'
                label='Username'
                component={TextField}
              />
              <Field
                required
                name='gender'
                label='Gender'
                options={[
                  { value: '', label: '-- No selection --' },
                  { value: 'Male', label: 'Male' },
                  { value: 'Female', label: 'Female' },
                  { value: 'Other', label: 'Other' }
                ]}
                component={Select}
              />
              <Field
                required
                name='countries'
                label='Countries'
                options={countries}
                component={Autocomplete}
              />
              <button type='submit' disabled={!props.dirty}>Submit</button>
            </Form>
          )}
        />
      </div>
    )
  }
}

export default RegistrationForm
