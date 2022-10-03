import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { SubmitHandler } from 'react-hook-form';
import { AnyZodObject } from 'zod';
import { AddressEnum } from '../enum/AddressEnum';
import { IAddress, IUser, RegisterAddressInput, RegisterInput } from '../types';

interface Props {
  children: ReactNode;
}

// Export socket context for consumers
export const UserContext = createContext<any>({});

const UserContextProvider: React.FC<Props> = ({ children }) => {
  const iniAddress = {
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
  };
  const iniUserDetails = {
    name: '',
    email: '',
    password: '',
  }
  const [address, setAddress] = useState<IAddress>(iniAddress);

  const [userDetails, setUserDetails] = useState<IUser>(iniUserDetails);

  useEffect(() => {
    console.log('userDetails ', userDetails);
  }, [userDetails]);

  const userInformationSubmitHandler: SubmitHandler<RegisterInput> = async (values) => {
    console.log('userInformationSubmitHandler ', values);
    setUserDetails(values);
  };

  const addressSubmitHandler: SubmitHandler<RegisterAddressInput> = (values) => {
    console.log(values);
  };

  const formatAddress = (receivedAddr: any) => {
    if (Object.keys(receivedAddr).length > 0) {
      const { name: address1, formatted_address } = receivedAddr;
      const [address2 = '', countryCode = ''] = formatted_address?.split(',');

      const postalCode = countryCode?.trim().split(' ')[1];

      console.log('formatAddress ', address1);
      console.log('formatAddress 2', address2, postalCode);

      setAddress({
        address1,
        address2,
        postalCode,
        city: AddressEnum.CITY,
        state: AddressEnum.STATE,
        country: AddressEnum.COUNTRY,
      });
    }
  };

  const handleGoogleAddress = (selectedAddress: any) => {
    console.log('updating address in context ', selectedAddress);
    formatAddress(selectedAddress);
    
  };

  const resetData = () => {
    setUserDetails(iniUserDetails);
    setAddress(iniAddress)
  }

  const renderChild = useMemo(() => {
    return (
      <UserContext.Provider
        value={{
          provider: 'abcd',
          userInformationSubmitHandler,
          addressSubmitHandler,
          handleGoogleAddress,
          address,
          userDetails,
          resetData,
        }}
      >
        <>{children}</>
      </UserContext.Provider>
    );
  }, [children, address, userDetails, resetData]);

  return <>{renderChild}</>;
};

export default UserContextProvider;
