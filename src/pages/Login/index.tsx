import { useState } from "react";
import {
  createUser,
  login,
  loginWithEmailAndPassword,
} from "../../service/auth";

export default function Login() {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await loginWithEmailAndPassword(email, password);
      const response = await createUser(user, { displayName });
      if (response) {
        setFormFields(defaultFormFields);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div style={{ paddingTop: 80 }}>
      <div>Login Page</div>
      <button onClick={login}>Sign In With Google</button>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">Name</label>
        <input
          type="text"
          id="displayName"
          required
          value={displayName}
          name="displayName"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          name="password"
          onChange={handleChange}
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          required
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
