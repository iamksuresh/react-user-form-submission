import { FC, useContext, useEffect, useRef } from 'react';
import { UserContext } from '../../contextProvider/UserContextProvider';
import  "./style.css";

const GooglePlaceInputBox: FC<any> = (props) => {
  const { handleGoogleAddress } = useContext(UserContext);
  
  const autoCompleteRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const options = {
    PlaceResult: {},
    componentRestrictions: { country: 'sg' },
    fields: ['formatted_address', 'name'],
    strictBounds : true,
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current as HTMLInputElement,
      options,
    );

    autoCompleteRef.current.addListener('place_changed', async function () {
     

      const { formatted_address, name } = await autoCompleteRef.current.getPlace();
      // console.log(place);
      handleGoogleAddress({formatted_address, name})
    });
  }, []);

  return (
    <div>
      <label>enter address :</label>
      <input ref={inputRef} />
    </div>
  );
};

export default GooglePlaceInputBox;
