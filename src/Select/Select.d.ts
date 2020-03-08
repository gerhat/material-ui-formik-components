import * as React from 'react'
import { FieldProps, FormikProps, FormikValues } from 'formik'
import { SelectOptionsType } from '..'

export interface FSelectProps {
  label?: string
  field: FieldProps
  form: FormikProps<FormikValues>
  options: Array<SelectOptionsType>
  fullWidth?: boolean
  margin?: 'none' | 'dense' | 'normal'
}

declare const FSelect: React.ComponentType<FSelectProps>

export default FSelect
