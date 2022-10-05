export const contextProps = {
  userInformationSubmitHandler: jest.fn(),
  handleGoogleAddress: jest.fn(),
  userDetails: {
    name: '',
    email: '',
    password: '',
  },
  address: {
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
  },
};

export const setupGoogleMock = () => {
  window.google = {
    maps: {
      places: {
        Autocomplete: class {
          addListener = jest.fn();
        },
      },
    } as any,
  };
};
