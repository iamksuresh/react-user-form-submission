import { render, fireEvent, screen } from './testUtils';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Information from '../../../components/user/Information';
import { CommonEnum } from '../../../enum/CommonEnum';
import { contextProps } from '../../__fixtures__';

describe('Test user Information Page', () => {
  beforeAll(() => {
    jest.mock('react-router-dom', () => ({
      ...(jest.requireActual('react-router-dom') as {}),
      useLocation: jest.fn().mockImplementation(() => {
        return { pathname: '/test' };
      }),
      useNavigate: jest.fn(),
    }));
  });

  it('Should render User information page', async () => {
    const { container } = await render(
      <BrowserRouter>
        <Information />
      </BrowserRouter>,
      {
        contextProps,
      },
    );
    const containerEle = container.querySelector('#informationContainer');
    expect(containerEle).toBeInTheDocument();
  });

  it('Should render Header in User information page', async () => {
    const { container } = await render(
      <BrowserRouter>
        <Information />
      </BrowserRouter>,
      {
        contextProps,
      },
    );
    expect(screen.getByText(CommonEnum.REGISTER_USER_INFORMATION)).toBeInTheDocument();
  });
});
