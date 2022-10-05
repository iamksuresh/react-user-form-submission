/**
 * Container component for User Form
 * Context API for accessing data between varios sub routes
 */
import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import UserContextProvider, { UserContext } from '../../contextProvider/UserContextProvider';

import styled from 'styled-components';
import { Grid } from '@mui/material';

const StyledBox = styled(Box)`
  width: 65%;
  margin: auto;
  padding: 10px;
`;

const UserFormSubmission: FC = () => {
  return (
    <UserContextProvider>
      <Grid id="userContainer" container={true} direction="row" spacing={2}>
        <StyledBox>
          <Outlet />
        </StyledBox>
      </Grid>
    </UserContextProvider>
  );
};

export default UserFormSubmission;
