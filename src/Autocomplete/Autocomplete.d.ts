import * as React from 'react'
import { AutocompleteProps } from '@material-ui/lab/Autocomplete'
import { FieldProps, FormikProps, FormikValues } from 'formik'
import { SelectOptionsType } from '..'

export interface FAutocompleteProps
  extends AutocompleteProps<SelectOptionsType, true, true, true> {
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
