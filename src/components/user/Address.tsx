import { FC, useContext,} from 'react';

import { UserContext } from '../../contextProvider/UserContextProvider';
import { CommonEnum } from '../../enum/CommonEnum';
import AddressForm from './AddressForm';
import GooglePlaceInputBox from './GooglePlaceInputBox';

const Address: FC<any> = (props) => {
  const { address } = useContext(UserContext);
  const { postalCode } = address;

  return (
    <>
      <h3>{CommonEnum.REGISTER_USER_ADRESS}</h3>
      <GooglePlaceInputBox />
      {postalCode.length > 0 && <AddressForm />}
    </>
  );
};

export default Address;
