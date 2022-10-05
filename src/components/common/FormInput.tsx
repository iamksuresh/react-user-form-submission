// tslint:disable jsx-no-lambda
/**
 * Form Input element.
 * constraints and usage can be controllerd by props
 */
import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type IFormInputProps = {
  name: string;
} & TextFieldProps;

const FormInput: FC<IFormInputProps> = ({ name, value, sx, disabled = true, ...otherProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          {...otherProps}
          error={!!errors[name]}
          value={value}
          sx={{ mb: 2, lg: 4, xl: 4, ...sx }}
          disabled={disabled}
          helperText={errors?.[name] ? <> {errors?.[name]?.["message"]} </> : ''}
        />
      )}
    />
  );
};

export default FormInput;
