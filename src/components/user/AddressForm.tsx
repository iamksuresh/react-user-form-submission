/**
 * Address form
 * Based on address selected in address search box , details are populated in this form
 */
import { LoadingButton } from '@mui/lab';
import { Box, Input, Typography } from '@mui/material';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useMatch, useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contextProvider/UserContextProvider';
import { CommonEnum } from '../../enum/CommonEnum';
import { RoutesEnum } from '../../enum/RoutesEnum';
import { RegisterAddressInput } from '../../types';
import FormInput from '../common/FormInput';

const AddressForm: FC<any> = (props) => {
  const { address } = useContext(UserContext);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { postalCode, address1, address2, city, state, country } = address;

  const methods = useForm<RegisterAddressInput>({});

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterAddressInput> = () => {
    navigate(`${RoutesEnum.USER}/${RoutesEnum.FORM_SUBMIT}`, {
      replace: true,
    });
  };

  return (
    <div id="addressForm">
      <FormProvider {...methods}>
        <Box
          component="form"
          noValidate={true}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <FormInput
            name="address1"
            value={address1}
            required={true}
            fullWidth={true}
            label={CommonEnum.ADDRESS_1}
            sx={{ mb: 2 }}
          />

          <FormInput
            name="address2"
            value={address2}
            required={true}
            fullWidth={true}
            label={CommonEnum.ADDRESS_2}
            sx={{ mb: 2 }}
          />

          <FormInput
            name="city"
            required={true}
            fullWidth={true}
            label={CommonEnum.CITY}
            value={city}
            sx={{ mb: 2 }}
          />
          <FormInput
            name="state"
            required={true}
            fullWidth={true}
            label={CommonEnum.STATE}
            value={state}
            sx={{ mb: 2 }}
          />

          <FormInput
            name="country"
            required={true}
            fullWidth={true}
            label={CommonEnum.COUNTRY}
            value={country}
            sx={{ mb: 2 }}
          />
          <FormInput
            name="postalcode"
            required={true}
            fullWidth={true}
            label={CommonEnum.POSTAL_CODE}
            value={postalCode}
            sx={{ mb: 2 }}
          />
          {!pathname.includes(RoutesEnum.FORM_SUBMIT) && (
            <div style={{ textAlign: 'center' }}>
              <LoadingButton
                variant="contained"
                size="medium"
                type="submit"
                sx={{ py: '0.8rem', mt: '1rem' }}
                disabled={Object.values(address).length === 0}
              >
                {CommonEnum.REVIEW_DETAILS}
              </LoadingButton>
            </div>
          )}
        </Box>
      </FormProvider>
    </div>
  );
};

export default AddressForm;
