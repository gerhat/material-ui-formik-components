import React from 'react'
import { Formik, Form, Field } from 'formik'
import { object, string, array, date } from 'yup'
import { Autocomplete, Select, TextField, DatePicker } from '../../src'
import countries from './data/countries.json'
import skills from './data/skills.json'

const validationSchema = object().shape({
  username: string().required('Username is required'),
  gender: string().required('Gender selection is required'),
  country: string().required('Country is required'),
  skills: array().required('At least one skill is required'),
  birthdate: date().required('Birth date is required'),
})

const initialValues = {
  username: '',
  gender: '',
  country: '',
  skills: [],
  birthdate: '',
}

const SimpleFormExample = () => (
  <div>
    <h1>Simple Form Example</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange
      onSubmit={values => {
        // eslint-disable-next-line no-alert
        window.alert(`
              Username: ${values.username}
              Gender: ${values.gender}
              Country: ${values.country.label}
              Skills: ${values.skills.map(v => v.label).join(',')}
              Birth date: ${values.birthdate}`)
      }}
      render={props => (
        <Form noValidate autoComplete="off">
          <Field
            required
            name="username"
            label="Username"
            component={TextField}
          />
          <Field
            required
            name="gender"
            label="Gender"
            options={[
              { value: '', label: '-- No selection --' },
              { value: 'Male', label: 'Male' },
              { value: 'Female', label: 'Female' },
              { value: 'Other', label: 'Other' },
            ]}
            component={Select}
          />
          <Field
            required
            name="country"
            label="Country"
            options={countries}
            component={Autocomplete}
          />
          <Field
            required
            name="skills"
            label="Skills"
            options={skills}
            component={Autocomplete}
            isMultiple
          />
          <Field
            required
            name="birthdate"
            component={DatePicker}
            label="Birth date"
            format="dd/MM/yyyy"
          />
          <button type="submit" disabled={!props.dirty}>
            Submit
          </button>
        </Form>
      )}
    />
  </div>
)

export default SimpleFormExample
