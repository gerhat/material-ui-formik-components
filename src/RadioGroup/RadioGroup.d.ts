import * as React from 'react';
import { FieldProps, FormikProps, FormikValues } from 'formik';
import { RadioGroupOptionsType } from '..'

export interface FRadioGroupProps {
  label?: string;
  field: FieldProps;
  form: FormikProps<FormikValues>;
  options: Array<RadioGroupOptionsType>;
  required?: boolean;
  fullWidth?: boolean;
  margin?: 'none' | 'dense' | 'normal';
}

declare const FRadioGroupProps: React.ComponentType<FRadioGroupProps>;

export default FRadioGroupProps;
