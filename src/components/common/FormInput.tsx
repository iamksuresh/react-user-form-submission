import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type IFormInputProps = {
  name: string;
} & TextFieldProps;

const FormInput: FC<IFormInputProps> = ({ name, value, ...otherProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller control={control} name={name}  render={({ field })=> (
        <TextField
          
          {...field}
          {...otherProps}
          error={!!errors[name]}
          value={value}
          helperText={errors?.[name] ? <> {errors[name]?.["message"]} </> : ''}
        />
      )}
    />
  );
};

export default FormInput;