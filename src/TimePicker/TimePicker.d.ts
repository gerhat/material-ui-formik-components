import * as React from 'react'
import { FieldProps, FormikProps, FormikValues } from 'formik'

export interface FTimePickerProps {
  label?: string
  field: FieldProps
  form: FormikProps<FormikValues>
  fullWidth?: boolean
  margin?: 'none' | 'dense' | 'normal'
  autoOk?: boolean
}

declare const FTimePickerProps: React.ComponentType<FTimePickerProps>

export default FTimePickerProps
