import { render, fireEvent, screen } from './testUtils';

import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GooglePlaceInputBox from '../../../components/user/GooglePlaceInputBox';
import { CommonEnum } from '../../../enum/CommonEnum';
import { contextProps, setupGoogleMock } from '../../__fixtures__';

describe('Test user Information Page', () => {
  beforeAll(() => {
    setupGoogleMock();
  });

  it('Should render Google Places Search Box', async () => {
    const { container } = await render(<GooglePlaceInputBox />, {
      contextProps,
    });
    const containerEle = container.querySelector('#placeSearchBox');
    expect(containerEle).toBeInTheDocument();
  });

  it('Should render Header in User information page', async () => {
    const { container } = await render(<GooglePlaceInputBox />, {
      contextProps,
    });
    userEvent.type(screen.getByRole('textbox'), 'bedok');
    expect(screen.getByRole('textbox')).toHaveValue('bedok');
  });
});
