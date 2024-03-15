import { useState } from "react";
import {
  loginWithEmailAndPassword,
  createUser,
} from "../../../../service/auth";
import FormInput from "../../../../components/FormInput";

export default function RegisterForm() {
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

  const handleSubmit = async (e: React.FormEvent) => {
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
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          htmlFor="displayName"
          type="text"
          id="displayName"
          required
          value={displayName}
          name="displayName"
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          htmlFor="email"
          type="email"
          id="email"
          required
          value={email}
          name="email"
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          htmlFor="password"
          type="password"
          id="password"
          required
          value={password}
          name="password"
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          htmlFor="confirm-password"
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
