import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Box, Input, Typography } from '@mui/material';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useMatch, useParams } from 'react-router';
import { UserContext } from '../../contextProvider/UserContextProvider';
import { AdressFormValidationSchema } from '../../schema/FormValidationSchema';
import { RegisterAddressInput } from '../../types';
import FormInput from '../common/FormInput';
import AddressForm from './AddressForm';

import GooglePlaceInputBox from './GooglePlaceInputBox';

const Address: FC<any> = (props) => {
  const { address } = useContext(UserContext);
  const { postalCode } = address;

  return (
    <>
      <Typography variant="h4" component="h1" sx={{ mb: '2rem' }}>
        Register User Address
      </Typography>

      <GooglePlaceInputBox />
      {postalCode.length > 0 && <AddressForm />}
    </>
  );
};

export default Address;
