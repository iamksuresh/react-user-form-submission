import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import { FC, useContext, useState } from 'react';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contextProvider/UserContextProvider';
import { RoutesEnum } from '../../enum/RoutesEnum';

const FormActions: FC<any> = ({ postData }) => {
  const val = useContext(UserContext);


  const [loading, setLoading] = useState(false);


  // const [showForm2, setShowForm2] = useState(false)

  const postUser = () => {
    console.log('inside FormActions ', val);

    postData();
  };

  return (
    <div>
      <Link to={RoutesEnum.INFORMATION}>
        <Button onClick={postUser}>Add User</Button>
        
      </Link>



      <Link to={RoutesEnum.ADDRESS}>
        <Button onClick={postUser}>NEXT</Button>
      </Link>
      <Link to={RoutesEnum.FORM_SUBMIT}>
        <Button onClick={postUser}>Submit</Button>
      </Link>

      {
        // showForm2 &&  <Navigate to = 'form2' />
      }
    </div>
  );
};
export default FormActions;
