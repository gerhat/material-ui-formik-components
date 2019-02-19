import * as React from 'react';
import { FieldProps, FormikProps, FormikValues } from 'formik';
import { OptionsType } from '..'

export interface AutocompleteProps {
  required?: boolean;
  label?: string;
  field: FieldProps;
  form: FormikProps<FormikValues>;
  options: Array<OptionsType>;
  fullWidth?: boolean;
  margin?: 'none' | 'dense' | 'normal';
}

declare const Autocomplete: React.ComponentType<AutocompleteProps>;

export default Autocomplete;
