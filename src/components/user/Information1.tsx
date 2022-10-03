import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { FC, useContext, useEffect } from 'react';
import { useLocation, useMatch, useParams } from 'react-router';
import { UserContext } from '../../contextProvider/UserContextProvider';

const Information: FC<any> = (props) => {
  let y = useLocation();

  // let x = useMatch();

  const val = useContext(UserContext);

  useEffect(() => {
    console.log('inside user Information ', val, y);
  }, []);

  return (
    <>
      <h4>Enter User Details</h4>
      <FormControl>
        <InputLabel htmlFor="user-name">Name</InputLabel>
        <Input id="user-name" aria-describedby="user-name-helper-text" />
        <FormHelperText id="user-name-helper-text">Add your name.</FormHelperText>
      </FormControl>
    </>
  );
};

export default Information;
