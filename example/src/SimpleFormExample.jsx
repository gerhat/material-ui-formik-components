import React from 'react'
import { Formik, Form, Field } from 'formik'
import { object, string, array, date, mixed } from 'yup'
import {
  Autocomplete,
  Select,
  TextField,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '../../src'
import countries from './data/countries.json'
import skills from './data/skills.json'

const validationSchema = object().shape({
  username: string().required('Username is required'),
  gender: string().required('Gender selection is required'),
  country: string().nullable().required('Country is required'),
  skills: array().required('At least one skill is required'),
  birthdate: date().nullable().required('Birth date is required'),
  interviewTime: mixed().required('Interview Time is required'),
})

const initialValues = {
  username: '',
  gender: 'Male',
  country: null,
  skills: [
    {
      label: 'ASP.NET',
      value: 'ASP.NET',
    },
  ],
  birthdate: null,
  interviewTime: null,
}

const SimpleFormExample = () => (
  <div>
    <h1>Simple Form Example</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange
      onSubmit={(values) => {
        // eslint-disable-next-line no-alert
        window.alert(`
              Username: ${values.username}
              Gender: ${values.gender}
              Country: ${values.country.label}
              Skills: ${values.skills.map((v) => v.label).join(', ')}
              Birth date: ${values.birthdate}
              Interview Time: ${values.interviewTime}
              `)
      }}
    >
      {(formik) => (
        <Form noValidate autoComplete="off">
          <Field
            required
            name="username"
            label="Username"
            component={TextField}
            size="small"
            variant="outlined"
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
            size="small"
            variant="outlined"
          />
          <Field
            name="country"
            options={countries}
            component={Autocomplete}
            size="small"
            textFieldProps={{
              label: 'Country',
              required: true,
              variant: 'outlined',
            }}
          />
          <Field
            name="skills"
            options={skills}
            component={Autocomplete}
            size="small"
            textFieldProps={{
              label: 'Skills',
              required: true,
              variant: 'outlined',
            }}
            multiple
          />
          <Field
            required
            name="birthdate"
            component={KeyboardDatePicker}
            label="Birth date"
            format="dd/MM/yyyy"
            size="small"
            inputVariant="outlined"
          />
          <Field
            required
            name="interviewTime"
            component={KeyboardTimePicker}
            label="Interview Time"
            size="small"
            inputVariant="outlined"
            mask="__:__"
            ampm={false}
          />
          <button type="submit" disabled={!formik.dirty}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
)

export default SimpleFormExample
