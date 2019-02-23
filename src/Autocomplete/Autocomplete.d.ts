import * as React from 'react';
import { FieldProps, FormikProps, FormikValues } from 'formik';
import { SelectOptionsType } from '..'

export interface AutocompleteProps {
  label?: string;
  field: FieldProps;
  form: FormikProps<FormikValues>;
  options: Array<SelectOptionsType>;
  required?: boolean;
  fullWidth?: boolean;
  margin?: 'none' | 'dense' | 'normal';
}

declare const Autocomplete: React.ComponentType<AutocompleteProps>;

export default Autocomplete;
