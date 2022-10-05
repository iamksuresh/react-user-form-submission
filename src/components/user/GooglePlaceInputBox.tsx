/**
 * Input box to search address.
 * Based on user input, dropdown list is displayed (top 5)
 *
 */
import { FC, useContext, useEffect, useRef } from 'react';
import { UserContext } from '../../contextProvider/UserContextProvider';
import './style.css';
import { InputLabel } from '@mui/material';
import { CommonEnum } from '../../enum/CommonEnum';
import { useEnv } from '../../hooks/useEnv';

const GooglePlaceInputBox: FC<any> = (props) => {
  const { handleGoogleAddress } = useContext(UserContext);
  // access env variables
  const { PlacesSearchFields, RestrictedCountry } = useEnv();
  const autoCompleteRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const options = {
    PlaceResult: {},
    componentRestrictions: { country: RestrictedCountry },
    fields: PlacesSearchFields,
    strictBounds: true,
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current as HTMLInputElement,
      options,
    );

    autoCompleteRef.current.addListener('place_changed', async () => {
      // fetch details of selected address
      const { formatted_address, name } = await autoCompleteRef.current.getPlace();
      handleGoogleAddress({ formatted_address, name });
    });
  }, []);

  return (
    <div id="placeSearchBox" style={{ marginBottom: '2rem' }}>
      <InputLabel style={{ display: 'inline' }}>{CommonEnum.SEARCH_ADDRESS}</InputLabel>
      <input style={{ width: '50%' }} ref={inputRef} />
    </div>
  );
};

export default GooglePlaceInputBox;
