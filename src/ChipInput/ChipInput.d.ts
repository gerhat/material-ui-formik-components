import * as React from 'react'
import { FieldProps, FormikProps, FormikValues } from 'formik'

export interface FChipInputProps {
  label?: string
  field: FieldProps
  form: FormikProps<FormikValues>
  fullWidth?: boolean
  margin?: 'none' | 'dense' | 'normal'
  newChipKeyCodes?: number
}

declare const FChipInputProps: React.ComponentType<FChipInputProps>

export default FChipInputProps
