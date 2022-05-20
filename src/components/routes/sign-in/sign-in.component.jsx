import {
  signInWithGooglePopUp,
  createUserDoc,
} from '../../../utils/firebase.utils';

import SignUpForm from '../../sign-up-form/sign-up-form.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user: userAuth } = await signInWithGooglePopUp();
    await createUserDoc(userAuth);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign In With Google</button>
      <SignUpForm />
    </div>
  );
};
export default SignIn;
