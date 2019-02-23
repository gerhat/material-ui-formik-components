import * as React from 'react';
import { FieldProps, FormikProps, FormikValues } from 'formik';

export interface FDateTimePickerProps {
  label?: string;
  field: FieldProps;
  form: FormikProps<FormikValues>;
  fullWidth?: boolean;
  margin?: 'none' | 'dense' | 'normal';
  ampm?: boolean;
  autoOk?: boolean;
}

declare const FDateTimePickerProps: React.ComponentType<FDateTimePickerProps>;

export default FDateTimePickerProps;
