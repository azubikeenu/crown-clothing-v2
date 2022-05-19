import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';
import {
  auth,
  signInWithGooglePopUp,
  createUserDoc,
  signInWithGoogleRedirect,
} from '../../../utils/firebase.utils';

import SignUpForm from '../../sign-up-form/sign-up-form.component';

const SignIn = () => {
  useEffect(() => {
    (async function logUser() {
      //SignInWithRedirect
      const response = await getRedirectResult(auth);
      if (response) {
        const { user } = response;
        const userDocRef = await createUserDoc(user);
        console.log(userDocRef);
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    const { user: userAuth } = await signInWithGooglePopUp();
    const userDocRef = await createUserDoc(userAuth);
    console.log(userDocRef);
  };

  const logGoogleRedirect = async () => {
    await signInWithGoogleRedirect();
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign In With Google</button>
      <button onClick={logGoogleRedirect}> Sign In With Google Redirect</button>
      <SignUpForm />
    </div>
  );
};
export default SignIn;
