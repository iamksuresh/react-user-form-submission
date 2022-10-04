import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';

import { UserContext } from '../../../contextProvider/UserContextProvider';


const customRender = async (ui: ReactElement, { contextProps, ...renderOptions }: any) => {
  
  const rendered = render(
    <UserContext.Provider value={contextProps}>{ui}</UserContext.Provider>,
    renderOptions,
  );
  return {
    ...rendered,
  };
};

export * from '@testing-library/react';
export { customRender as render };
