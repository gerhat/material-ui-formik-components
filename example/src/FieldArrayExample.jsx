import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import { object, string, array } from 'yup'
import { ChipInput, TextField, Select, DateTimePicker } from '../../src'

const validationSchema = object().shape({
  friends: array().of(
    object().shape({
      name: string().min(4, 'Name is too short').required('Name is Required'),
      interests: array().required('Interests is required'),
      gender: string().required('Gender is required'),
      birthdate: string().required('Birth date is required'),
    })
  ),
})

const initialValues = {
  friends: [],
}

const emptyFriendObject = {
  name: '',
  interests: [],
  gender: '',
  birthdate: null,
}

const FieldArrayExample = () => (
  <div>
    <h1>FieldArray Example</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      onSubmit={(values) => {
        // eslint-disable-next-line no-alert
        window.alert(JSON.stringify(values, null, 2))
      }}
    >
      {(props) => (
        <Form noValidate autoComplete="off">
          <FieldArray
            name="friends"
            render={(arrayHelpers) => (
              <div>
                {props.values.friends && props.values.friends.length > 0 ? (
                  props.values.friends.map((friend, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={index}>
                      <Field
                        name={`friends.${index}.name`}
                        component={TextField}
                        label="Name"
                        required
                      />
                      <Field
                        name={`friends.${index}.interests`}
                        component={ChipInput}
                        label="Interests (type an interest and press space)"
                        required
                      />
                      <Field
                        name={`friends.${index}.gender`}
                        component={Select}
                        options={[
                          { value: '', label: '-- No selection --' },
                          { value: 'Male', label: 'Male' },
                          { value: 'Female', label: 'Female' },
                          { value: 'Other', label: 'Other' },
                        ]}
                        label="Gender"
                        required
                      />
                      <Field
                        name={`friends.${index}.birthdate`}
                        component={DateTimePicker}
                        label="Birth date"
                        required
                      />
                      <div style={{ marginTop: 20 }}>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.push(emptyFriendObject)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <button
                    type="button"
                    onClick={() => arrayHelpers.push(emptyFriendObject)}
                  >
                    {/* show this when user has removed all friends from the list */}
                    Add a friend
                  </button>
                )}
                <div style={{ marginTop: 20 }}>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    </Formik>
  </div>
)

export default FieldArrayExample
