import * as React from 'react'
import { FieldProps, FormikProps, FormikValues } from 'formik'
import { RadioGroupOptionsType } from '..'

/**
 * Classnames that can be used for the customization of RadioGroup
 */
export interface FRadioClasses {
  formControl?: string
  formLabel?: string
  radioGroup?: string
  formControlLabel?: string
  radio?: string
  formHelperText?: string
}

export interface FRadioGroupComponentProps {
  row?: boolean
}

export interface FRadioGroupProps {
  /**
   * The RadioGroup label
   */
  label?: string

  /**
   * Field props passed from Formik
   * https://formik.org/docs/api/field#props-1
   */
  field: FieldProps

  /**
   * Formik props passed from Formik
   * https://formik.org/docs/api/formik#props-1
   */
  form: FormikProps<FormikValues>

  /**
   * The radio group options
   */
  options: Array<RadioGroupOptionsType>

  /**
   * Displays an asterisk if required is true
   */
  required?: boolean

  /**
   * If `true`, the component will take up the full width of its container
   * @default true
   */
  fullWidth?: boolean

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components
   * @default normal
   */
  margin?: 'none' | 'dense' | 'normal'

  /**
   * Use this prop to set classNames to the various internal components
   */
  classes?: FRadioClasses

  /**
   * RadioGroup props that are spread at `<RadioGroup />` component
   * https://material-ui.com/api/radio-group/
   */
  groupProps?: FRadioGroupComponentProps
}

declare const FRadioGroupProps: React.ComponentType<FRadioGroupProps>

export default FRadioGroupProps
