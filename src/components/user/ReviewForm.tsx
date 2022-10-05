import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import { FC, useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { UserContext } from '../../contextProvider/UserContextProvider';
import { CommonEnum } from '../../enum/CommonEnum';
import { RoutesEnum } from '../../enum/RoutesEnum';
import { FormService } from '../../services/FormService';
import { hashPassword } from '../../utils';
import AddressForm from './AddressForm';
import InformationForm from './InformationForm';

const ReviewForm: FC<any> = (props) => {
  const { address, userDetails, resetData } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formSubmit = async () => {
    try {
      setLoading(true);
      // call axios service
      await FormService.submitUserForm({
        ...userDetails,
        ...address,
        password : hashPassword(userDetails.password)
      });
      resetData();
      // navigate back to Landing page
      navigate(RoutesEnum.USER);
    } catch (e) {
      throw e;
    }
  };
  return (
    <>
      <InformationForm />
      <AddressForm />
      <div style={{ textAlign: 'center' }}>
        <LoadingButton
          variant="contained"
          size="medium"
          onClick={formSubmit}
          loading={loading}
          sx={{ py: '0.8rem', mt: '1rem' }}
        >
          {CommonEnum.SUBMIT_USER_FORM}
        </LoadingButton>
      </div>
    </>
  );
};

export default ReviewForm;
