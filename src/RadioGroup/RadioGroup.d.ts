import * as React from 'react';
import { FieldProps, FormikProps, FormikValues } from 'formik';
import { RadioGroupOptionsType } from '..'

/**
 * Objects that can be used for the customization of RadioGroup
 */
export interface FRadioClasses {
  formControl?: Object,
  formLabel?: Object,
  radioGroup?: Object,
  formControlLabel?: Object,
  radio?: Object,
  formHelperText?: Object
}

export interface FRadioGroupProps {
  label?: string;
  field: FieldProps;
  form: FormikProps<FormikValues>;
  options: Array<RadioGroupOptionsType>;
  required?: boolean;
  fullWidth?: boolean;
  margin?: 'none' | 'dense' | 'normal';
  classes?: FRadioClasses
}

declare const FRadioGroupProps: React.ComponentType<FRadioGroupProps>;

export default FRadioGroupProps;
