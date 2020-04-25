import * as React from 'react'
import { FieldProps, FormikProps, FormikValues } from 'formik'

export interface FKeyboardDatePickerProps {
  label?: string
  field: FieldProps
  form: FormikProps<FormikValues>
  fullWidth?: boolean
  margin?: 'none' | 'dense' | 'normal'
  autoOk?: boolean
}

declare const FKeyboardDatePickerProps: React.ComponentType<FKeyboardDatePickerProps>

export default FKeyboardDatePickerProps
