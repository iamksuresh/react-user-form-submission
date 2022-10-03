import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Box, Input, Typography } from '@mui/material';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useMatch, useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contextProvider/UserContextProvider';
import { RoutesEnum } from '../../enum/RoutesEnum';
import { AdressFormValidationSchema } from '../../schema/FormValidationSchema';
import { RegisterAddressInput } from '../../types';
import FormInput from '../common/FormInput';

import GooglePlaceInputBox from './GooglePlaceInputBox';

const AddressForm: FC<any> = (props) => {
  const { addressSubmitHandler, address, userDetails } = useContext(UserContext);
  let navigate = useNavigate();
  let { pathname } = useLocation();

  const {state : locationState} = useLocation()

  console.log('locationState ', locationState)
  const { postalCode, address1, address2, city, state, country } = address;

  const [loading, setLoading] = useState(false);

  const methods = useForm<RegisterAddressInput>({
    // @ts-ignore
    // resolver: zodResolver(AdressFormValidationSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { isSubmitSuccessful, isDirty, isValid, errors },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterAddressInput> = () => {
    // addressSubmitHandler;
    navigate(`/userform/${RoutesEnum.FORM_SUBMIT}`, {
      replace: true,
    });
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
        <FormInput
          name="address1"
          value={address1}
          required
          fullWidth
          label="Address Line 1"
          sx={{ mb: 2 }}
        />

        <FormInput
          name="address2"
          value={address2}
          required
          fullWidth
          label="Address Line 2"
          sx={{ mb: 2 }}
        />

        <FormInput name="city" required fullWidth label="City" value={city} sx={{ mb: 2 }} />
        <FormInput name="state" required fullWidth label="State" value={state} sx={{ mb: 2 }} />

        <FormInput
          name="country"
          required
          fullWidth
          label="Country"
          value={country}
          sx={{ mb: 2 }}
        />
        <FormInput
          name="postalcode"
          required
          fullWidth
          label="Postal Code"
          value={postalCode}
          sx={{ mb: 2 }}
        />
{(!pathname.includes(RoutesEnum.FORM_SUBMIT)) && (
  <LoadingButton
          variant="contained"
          fullWidth
          type="submit"
          loading={loading}
          sx={{ py: '0.8rem', mt: '1rem' }}
          disabled={Object.values(address).length === 0}
        >
          Review Details
        </LoadingButton>
)}
        
      </Box>
    </FormProvider>
  );
};

export default AddressForm;
