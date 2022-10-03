// Acccess env variables here
export const useEnv = () => {
  const PlacesSearchFields = process.env.REACT_APP_API_SEARCH_FIELDS 
  ? process.env.REACT_APP_API_SEARCH_FIELDS.split(',')
  :['formatted_address', 'name'];
  const RestrictedCountry = process.env.REACT_APP_RESTRICTED_COUNTRY ?? 'sg'

  return {
    PlacesSearchFields,
    RestrictedCountry
  };
};
