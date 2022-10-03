import { Button } from '@mui/material';
import React, { FC, useContext, useEffect, useRef } from 'react';
import { Box, FormControlLabel, FormGroup, FormHelperText, Typography } from '@mui/material';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Navigate, Outlet, useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import UserContextProvider, { UserContext } from '../../contextProvider/UserContextProvider';
import { RoutesEnum } from '../../enum/RoutesEnum';
import FormActions from './FormActions';
import { RegisterInput } from '../../types';

const UserFormSubmission: FC<any> = (props) => {
  let x = useLocation();

  // useEffect(() => {
  //   console.log('inside user routes ', x);
  // }, []);

  const postData = () => {
    console.log('inside user routes -> postData ');
  };

  return (
    <UserContextProvider>
      <>
        <Box  sx={{ maxWidth: '30rem' }}>
          
          <Outlet />
          {/* <FormActions postData={postData} /> */}
        </Box>
      </>
    </UserContextProvider>
  );
};

export default UserFormSubmission;

{
  /* <Routes>
        <Route path={RoutesEnum.FORM1} element={renderComponent()} />

        <Route path={RoutesEnum.FORM2} element={<>USER - form 2 landing page</>} />

        <Route path={RoutesEnum.REVIEW_FORM} element={<>USER - final landing page</>} />
      </Routes> */
}
