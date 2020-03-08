import * as React from 'react'
import { FieldProps, FormikProps, FormikValues } from 'formik'
import { SelectOptionsType } from '..'

export interface FAutocompleteProps {
  field: FieldProps
  form: FormikProps<FormikValues>
  options: Array<SelectOptionsType>
  textFieldProps: {
    label?: string
    required?: boolean
    fullWidth?: boolean
    margin?: 'none' | 'dense' | 'normal'
  }
}

declare const FAutocomplete: React.ComponentType<FAutocompleteProps>

export default FAutocomplete
