// tslint:disable jsx-no-lambda
import { Box } from '@mui/material';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useContext, useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';

import FormInput from '../common/FormInput';
import { InformationFormValidationSchema } from '../../schema/FormValidationSchema';
import { RegisterInput } from '../../types';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../contextProvider/UserContextProvider';
import { RoutesEnum } from '../../enum/RoutesEnum';
import { useNavigate } from 'react-router-dom';
import { CommonEnum } from '../../enum/CommonEnum';

const InformationForm: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { userInformationSubmitHandler, userDetails } = useContext(UserContext);
  const { name: contextName, password: contextPassword, email: contextEmail } = userDetails;

  const [name, setName] = useState(contextName);
  const [email, setEmail] = useState(contextEmail);
  const [password, setPassword] = useState(contextPassword);
  const [shldDisable, setShldDisable] = useState(false);

  useEffect(() => {
    if (pathname.includes(RoutesEnum.FORM_SUBMIT)) {
      setShldDisable(true);
    }
  }, []);

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
    await userInformationSubmitHandler(data);
    navigate(`${RoutesEnum.USER}/${RoutesEnum.ADDRESS}`, {
      replace: true,
    });
  };

  return (
    <div id="informationForm">
      <FormProvider {...methods}>
        <Box
          component="form"
          noValidate={true}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <FormInput
            name="name"
            value={name}
            onChange={(e) => (setName(e.target.value), setValue('name', e.target.value))}
            required={true}
            fullWidth={true}
            disabled={shldDisable}
            label={CommonEnum.NAME}
          />

          <FormInput
            name="email"
            required={true}
            fullWidth={true}
            label={CommonEnum.EMAIL_ADDRESS}
            type="email"
            value={email}
            disabled={shldDisable}
            onChange={(e) => (setEmail(e.target.value), setValue('email', e.target.value))}
            sx={{ mb: 2 }}
          />
          <FormInput
            name="password"
            required={true}
            fullWidth={true}
            label={CommonEnum.PASSWORD}
            type="password"
            value={password}
            disabled={shldDisable}
            onChange={(e) => {
              setPassword(e.target.value);
              setValue('password', e.target.value);
            }}
            sx={{ mb: 2 }}
          />

          {!pathname.includes(RoutesEnum.FORM_SUBMIT) && (
            <div style={{ textAlign: 'center' }}>
              <LoadingButton
                variant="contained"
                size="medium"
                type="submit"
                sx={{ py: '0.8rem', mt: '1rem' }}
              >
                {CommonEnum.ADD_ADDRESS}
              </LoadingButton>
            </div>
          )}
        </Box>
      </FormProvider>
    </div>
  );
};

export default InformationForm;
