import * as React from 'react'
import { FieldProps, FormikProps, FormikValues } from 'formik'

export interface FDatePickerProps {
  label?: string
  field: FieldProps
  form: FormikProps<FormikValues>
  fullWidth?: boolean
  margin?: 'none' | 'dense' | 'normal'
  autoOk?: boolean
}

declare const FDatePickerProps: React.ComponentType<FDatePickerProps>

export default FDatePickerProps
