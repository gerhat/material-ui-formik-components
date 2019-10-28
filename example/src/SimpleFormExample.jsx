import React from 'react'
import { Formik, Form, Field } from 'formik'
import { object, string, array } from 'yup'
import { Autocomplete, Select, TextField } from '../../src'
import countries from './data/countries.json'
import skills from './data/skills.json'

const validationSchema = object().shape({
  username: string().required('Username is required'),
  gender: string().required('Gender selection is required'),
  country: string().required('Country is required'),
  skills: array().required('At least one skill is required'),
})

const initialValues = {
  username: '',
  gender: '',
  country: '',
  skills: [],
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
              Skills: ${values.skills.map(v => v.label).join(',')}`)
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
          <button type="submit" disabled={!props.dirty}>
            Submit
          </button>
        </Form>
      )}
    />
  </div>
)

export default SimpleFormExample
