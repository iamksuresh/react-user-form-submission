import { Input } from '@mui/material';
import { FC, useEffect } from 'react';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';

const Address: FC<any> = (props) => {
  const { placesService, placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    usePlacesService({
      // apiKey: process.env.REACT_APP_GOOGLE,
      apiKey: 'AIzaSyBq9pCp19hbAs2zjxduGEFGm6B0bep8ENM',
      libraries: ['places'],
      debounce: 2000,
     
    });

  useEffect(() => {
    // fetch place details for the first element in placePredictions array
    if (placePredictions.length)
      placesService?.getDetails(
        {
          placeId: placePredictions[0].place_id,
        },
        (placeDetails: any) => {
          console.log('placeDetails ', placeDetails);
        },
      );
  }, [placePredictions]);

  return (
    <>
      <Input
        placeholder="Debounce 500 ms"
        onChange={(evt: any) => {
          getPlacePredictions({
            input: evt.target.value,
            componentRestrictions: {country : [ 'sg']},
            // types: [ "postal_code", "country", "street_address"]
            // types : [ 'address', 'establishment', 'cities']
          });
        }}

        // loading={(isPlacePredictionsLoading as boolean)}
      />
      {
        // placePredictions.map((item) => renderItem(item))
      }
    </>
  );
};

export default Address;
