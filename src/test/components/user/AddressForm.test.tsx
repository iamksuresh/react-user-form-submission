import { render, fireEvent, screen } from './testUtils';
import React from 'react';
import AddressForm from '../../../components/user/AddressForm';
import { BrowserRouter } from 'react-router-dom';
import { CommonEnum } from '../../../enum/CommonEnum';
import { contextProps } from '../../__fixtures__';

describe('Test User Address Form', () => {
  it('Should load Address form', async () => {
    const { container } = await render(
      <BrowserRouter>
        <AddressForm />
      </BrowserRouter>,
      {
        contextProps,
      },
    );
    const containerEle = container.querySelector('#addressForm');

    expect(containerEle).toBeInTheDocument();
  });

  it('Should load all Address form elements ', async () => {
    const { container } = await render(
      <BrowserRouter>
        <AddressForm />
      </BrowserRouter>,
      {
        contextProps
      },
    );
    
    expect(screen.getByText(CommonEnum.POSTAL_CODE)).toBeInTheDocument();
    expect(screen.getByText(CommonEnum.COUNTRY)).toBeInTheDocument();
    expect(screen.getByText(CommonEnum.STATE)).toBeInTheDocument();
    expect(screen.getByText(CommonEnum.CITY)).toBeInTheDocument();
    expect(screen.getByText(CommonEnum.ADDRESS_1)).toBeInTheDocument();
    
    expect(screen.getByText(CommonEnum.ADDRESS_2)).toBeInTheDocument();
  });
});
