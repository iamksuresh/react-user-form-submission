/**
 * Wraps the User container and facilitates data acess - like store manager
 * clients directly access data from this context
 */
import {
  createContext,
  ReactNode,
  useMemo,
  useState,
} from 'react';
import { SubmitHandler } from 'react-hook-form';
import { AddressEnum } from '../enum/AddressEnum';
import { IAddress, IUser, RegisterInput } from '../types';
interface Props {
  children: ReactNode;
}

// Export User context for consumers
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
  };
  const [address, setAddress] = useState<IAddress>(iniAddress);

  const [userDetails, setUserDetails] = useState<IUser>(iniUserDetails);

  const userInformationSubmitHandler: SubmitHandler<RegisterInput> = async (values) => {
    setUserDetails(values);
  };

  const formatAddress = (receivedAddr: any) => {
    if (Object.keys(receivedAddr).length > 0) {
      const { name: address1, formatted_address } = receivedAddr;
      const [address2 = '', countryCode = ''] = formatted_address?.split(',');

      const postalCode = countryCode?.trim().split(' ')[1];

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
    formatAddress(selectedAddress);
  };

  const resetData = () => {
    setUserDetails(iniUserDetails);
    setAddress(iniAddress);
  };

  const renderChild = useMemo(() => {
    return (
      <UserContext.Provider
        value={{
          userInformationSubmitHandler,
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
