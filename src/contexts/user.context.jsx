import { createContext, useState } from 'react';

// the storage / actual value for user
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// this is a component wrapper that gives child compoents access to the user context
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
