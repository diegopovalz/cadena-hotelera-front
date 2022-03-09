import React from 'react';

const LocationContext = React.createContext({
  location: '',
  // eslint-disable-next-line no-unused-vars
  setLocation: (location) => {},
});

export default LocationContext;
