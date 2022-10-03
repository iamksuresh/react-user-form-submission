import {  
  Grid,
} from '@mui/material';
import { FC } from 'react';
import styled from 'styled-components';

import InformationForm from './InformationForm';
import ImageUploader from '../imageUploader';
import { CommonEnum } from '../../enum/CommonEnum';

const StyledImgLoader = styled(Grid)`
  display: float;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 'auto';
`;

const StyledGridContainer = styled(Grid)`
  display: flex;
  align-content: flex-end;
  align-items: center;
  margin-bottom: 5px;
`;
const Information: FC<any> = (props) => {
  return (
    <>
      <StyledGridContainer container={true}>
        <Grid item={true} xs={8} sm={8} md={6} lg={6} xl={6}>
          <h3>{CommonEnum.REGISTER_USER_INFORMATION}</h3>
        </Grid>
        <StyledImgLoader item={true} xs={4} sm={4} md={6} lg={6} xl={6}>
          <ImageUploader />
        </StyledImgLoader>
      </StyledGridContainer>

      <InformationForm />
    </>
  );
};

export default Information;
