import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import { FC, useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { UserContext } from '../../contextProvider/UserContextProvider';
import { RoutesEnum } from '../../enum/RoutesEnum';
import { FormService } from '../../services/FormService';
import AddressForm from './AddressForm';
import InformationForm from './InformationForm';

const ReviewForm: FC<any> = (props) => {
  const { addressSubmitHandler, address, userDetails, resetData } = useContext(UserContext);

  
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const formSubmit = async () => {
    setLoading(true)
    // call axios service
    await FormService.submitUserForm({
      ...userDetails,
      ...address
    })
    resetData();
    // setLoading(false)
    navigate(RoutesEnum.USER)
  };
  return (
    <>
      <InformationForm />
      <AddressForm />
      <LoadingButton
        variant="contained"
        fullWidth
        onClick={formSubmit}
        loading={loading}
        sx={{ py: '0.8rem', mt: '1rem' }}
        // disabled={Object.values(address).length === 0}
      >
        Submit User Form
      </LoadingButton>
    </>
  );
};

export default ReviewForm;
