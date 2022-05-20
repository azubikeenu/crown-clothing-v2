import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';

import './sign-in-form.styles.scss';
import {
  createUserDoc,
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
  auth,
} from '../../utils/firebase.utils';

const SignInForm = () => {
  const defaultFields = {
    email: '',
    password: '',
  };
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;
  console.log(formFields);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (err) {
      if (
        err.code === 'auth/wrong-password' ||
        err.code === 'auth/user-not-found'
      ) {
        alert('Incorrect Email or Password');
      } else {
        console.err(`An Error Occured `, err.message);
      }
    }

    resetFormFields();
  };

  const sigInWithGoogle = async () => {
    try {
      const { user: userAuth } = await signInWithGooglePopUp();
      await createUserDoc(userAuth);
    } catch (err) {
      if (
        err.code === 'auth/cancelled-popup-request' ||
        err.code === 'auth/popup-closed-by-user'
      ) {
      } else {
        console.err(err.message);
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-form-container">
      <h2>Already have an account ?</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={sigInWithGoogle}>
            With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
