import React from 'react';
import styled from 'styled-components';
import { CommonEnum } from '../../enum/CommonEnum';

const StyledHeader = styled.h2`
  justify-content: center;
  display: flex;
  color: white;
`;

const Header: React.FC = () => <StyledHeader id="appHeader">{CommonEnum.USER_INFORMATION}</StyledHeader>;

export default Header;
