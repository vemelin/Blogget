import React from 'react';
import propTypes from 'prop-types';
import useToken from '../hooks/token';

export const tokenContext = React.createContext({});

export const TokenContextProvider = ({children}) => {
  const [token, deleteToken] = useToken('');
  return (
    <tokenContext.Provider value={{token, deleteToken}}>
      {children}
    </tokenContext.Provider>
  );
};

TokenContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};
