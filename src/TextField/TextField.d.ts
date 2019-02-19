import * as React from 'react';
import { FieldProps, FormikProps, FormikValues } from 'formik';
import { InputProps } from '@material-ui/core/Input';

export interface FTextFieldProps {
  label?: string;
  field: FieldProps;
  form: FormikProps<FormikValues>;
  inputProps?: InputProps;
  fullWidth?: boolean;
  margin?: 'none' | 'dense' | 'normal';
}

declare const FTextField: React.ComponentType<FTextFieldProps>;

export default FTextField;
