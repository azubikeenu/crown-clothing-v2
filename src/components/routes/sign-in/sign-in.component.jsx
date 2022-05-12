import {
  signInWithGooglePopUp,
  createUserDoc,
} from '../../../utils/firebase.utils';
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDoc(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign In With Google</button>
    </div>
  );
};
export default SignIn;
