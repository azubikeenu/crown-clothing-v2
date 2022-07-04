import { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  createUserDoc,
} from '../utils/firebase.utils';

// the storage / actual value for user
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// this is a component wrapper that gives child compoents accecss to the user context
export const UserProvider = ({ children }) => {
  // observing the authenticationState
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDoc(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
