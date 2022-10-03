import { Box, FormControlLabel, FormGroup, FormHelperText, Typography } from '@mui/material';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC, forwardRef, useContext, useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';

import FormInput from '../common/FormInput';
import { InformationFormValidationSchema } from '../../schema/FormValidationSchema';
import { RegisterInput } from '../../types';
import { useParams, useLocation } from 'react-router-dom';
import { UserContext } from '../../contextProvider/UserContextProvider';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../enum/RoutesEnum';
import { useNavigate } from 'react-router-dom';
import ImageUploader from '../imageUploader';

const InformationForm: FC<any> = (props) => {
  let { pathname } = useLocation();
  const { userInformationSubmitHandler, userDetails } = useContext(UserContext);

  const { state: locationState } = useLocation();

  const { name: contextName, password: contextPassword, email: contextEmail } = userDetails;
  let navigate = useNavigate();

  // const [loading, setLoading] = useState(false);
  const [isDisabled, setIsdisabled] = useState(true);
  const [name, setName] = useState(contextName);
  const [email, setEmail] = useState(contextEmail);
  const [password, setPassword] = useState(contextPassword);

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(InformationFormValidationSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { isSubmitSuccessful, isDirty, isValid, errors },
    setValue,
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = async (data) => {
    // setLoading(true)
    console.log('data ', data);
    await userInformationSubmitHandler(data);
    navigate(`/userform/${RoutesEnum.ADDRESS}`, {
      replace: true,
    });
  };

  return (
    <>
      <ImageUploader />
      <FormProvider {...methods}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <FormInput
            name="name"
            value={name}
            onChange={(e) => (setName(e.target.value), setValue('name', e.target.value))}
            required
            fullWidth
            label="Name"
            sx={{ mb: 2 }}
          />

          <FormInput
            name="email"
            required
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => (setEmail(e.target.value), setValue('email', e.target.value))}
            sx={{ mb: 2 }}
          />
          <FormInput
            name="password"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => (setPassword(e.target.value), setValue('password', e.target.value))}
            sx={{ mb: 2 }}
          />

          {!pathname.includes(RoutesEnum.FORM_SUBMIT) && (
            <LoadingButton
              variant="contained"
              fullWidth
              type="submit"
              // loading={loading}
              sx={{ py: '0.8rem', mt: '1rem' }}
              // disabled={Object.keys(errors).length > 0 || !isDirty}
            >
              Add Address
            </LoadingButton>
          )}
        </Box>
      </FormProvider>
    </>
  );
};

export default InformationForm;
