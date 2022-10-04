import { render, fireEvent, screen } from './testUtils';
import React from 'react';
import InformationForm from '../../../components/user/InformationForm';
import { BrowserRouter } from 'react-router-dom';
import { CommonEnum } from '../../../enum/CommonEnum';
import { contextProps } from '../../__fixtures__';

describe('Test User Information Form', () => {
  it('Should load User form', async () => {
    const { container } = await render(
      <BrowserRouter>
        <InformationForm />
      </BrowserRouter>,
      {
        contextProps,
      },
    );
    const containerEle = container.querySelector('#informationForm');   
    expect(containerEle).toBeInTheDocument();
  });

  it('Should load all User form elements ', async () => {
    const { container } = await render(
      <BrowserRouter>
        <InformationForm />
      </BrowserRouter>,
      {
        contextProps,
      },
    );
    
    expect(screen.getByText(CommonEnum.NAME)).toBeInTheDocument();
    expect(screen.getByText(CommonEnum.EMAIL_ADDRESS)).toBeInTheDocument();
    expect(screen.getByText(CommonEnum.PASSWORD)).toBeInTheDocument();
    expect(screen.getByText(CommonEnum.ADD_ADDRESS)).toBeInTheDocument();
  });
});
