import * as React from 'react';
import { FieldProps, FormikProps, FormikValues } from 'formik';

export interface FSwitchProps {
  label?: string;
  field: FieldProps;
  form: FormikProps<FormikValues>;
  required?: boolean;
  fullWidth?: boolean;
  margin?: 'none' | 'dense' | 'normal';
}

declare const FSwitchProps: React.ComponentType<FSwitchProps>;

export default FSwitchProps;
