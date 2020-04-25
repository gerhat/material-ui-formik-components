import * as React from 'react'
import { FieldProps, FormikProps, FormikValues } from 'formik'

export interface FKeyboardDateTimePickerProps {
  label?: string
  field: FieldProps
  form: FormikProps<FormikValues>
  fullWidth?: boolean
  margin?: 'none' | 'dense' | 'normal'
  autoOk?: boolean
}

declare const FKeyboardDateTimePickerProps: React.ComponentType<FKeyboardDateTimePickerProps>

export default FKeyboardDateTimePickerProps
