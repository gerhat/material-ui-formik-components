import * as React from 'react';
import { FieldProps, FormikProps, FormikValues } from 'formik';
import { OptionsType } from '..'

export interface FSelectProps {
  required?: boolean;
  label?: string;
  field: FieldProps;
  form: FormikProps<FormikValues>;
  options: Array<OptionsType>;
  fullWidth?: boolean;
  margin?: 'none' | 'dense' | 'normal';
}

declare const FSelect: React.ComponentType<FSelectProps>;

export default FSelect;
