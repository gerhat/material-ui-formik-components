import * as React from 'react'
import { FieldProps, FormikProps, FormikValues } from 'formik'

export interface FKeyboardTimePickerProps {
  label?: string
  field: FieldProps
  form: FormikProps<FormikValues>
  fullWidth?: boolean
  margin?: 'none' | 'dense' | 'normal'
  autoOk?: boolean
}

declare const FKeyboardTimePickerProps: React.ComponentType<FKeyboardTimePickerProps>

export default FKeyboardTimePickerProps
