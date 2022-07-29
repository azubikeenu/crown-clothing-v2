import { createContext, useEffect, useReducer } from 'react';
import {
  onAuthStateChangedListener,
  createUserDoc,
} from '../utils/firebase.utils';

import { createAction } from '../utils/reducers/reducer.utils';

// the storage / actual value for user
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTIONS = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTIONS.SET_CURRENT_USER:
      return { currentUser: payload };
    default:
      throw new Error(`Unhandled type :  ${type} in userReducer `);
  }
};

// this is a component wrapper that gives child compoents accecss to the user context
const INITIAL_STATE = { currentUser: null };
export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  // const [currentUser, setCurrentUser] = useState(null);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTIONS.SET_CURRENT_USER, user));
  };

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

  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
