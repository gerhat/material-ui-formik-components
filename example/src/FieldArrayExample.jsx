import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import { object, string, array } from 'yup'
import { ChipInput, TextField } from '../../src'

const validationSchema = object().shape({
  friends: array().of(
    object().shape({
      name: string()
        .min(4, 'Name is too short')
        .required('Name is Required'),
      skills: array().required('Skills are required'),
    })
  ),
})

const initialValues = {
  friends: [],
}

const emptyFriendObject = {
  name: '',
  skills: [],
}

const FieldArrayExample = () => (
  <div>
    <h1>FieldArray Example</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      onSubmit={values => {
        // eslint-disable-next-line no-alert
        window.alert(JSON.stringify(values, null, 2))
      }}
    >
      {props => (
        <Form>
          <FieldArray
            name="friends"
            render={arrayHelpers => (
              <div>
                {props.values.friends && props.values.friends.length > 0 ? (
                  props.values.friends.map((friend, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={index}>
                      <Field
                        name={`friends.${index}.name`}
                        component={TextField}
                        label="Name"
                      />
                      <Field
                        name={`friends.${index}.skills`}
                        component={ChipInput}
                        label="Skills"
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
