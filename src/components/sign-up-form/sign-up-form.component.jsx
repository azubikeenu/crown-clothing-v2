import { useState } from 'react';

const SignUpForm = () => {

  const defaultFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display name</label>
        <input
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type="confirmPassword"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
