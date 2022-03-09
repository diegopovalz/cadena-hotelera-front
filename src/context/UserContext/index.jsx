import React from 'react';

const UserContext = React.createContext({
  user: {},
  // eslint-disable-next-line no-unused-vars
  setUser: (user) => {},
});

export default UserContext;
