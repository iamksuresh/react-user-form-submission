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
import InformationForm from './InformationForm';

const Information: FC<any> = (props) => {
 

  return (
    <>
      <Typography variant="h4" component="h1" sx={{ mb: '2rem' }}>
        Register User Information
      </Typography>
      <InformationForm />
    </>
  );
};

export default Information;
