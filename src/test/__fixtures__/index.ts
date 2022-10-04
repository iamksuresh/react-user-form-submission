export const contextProps = {
  userInformationSubmitHandler: () => {},
  handleGoogleAddress : () => {},
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
        AutocompleteService: class {},
      },
    } as any,
  };
};
