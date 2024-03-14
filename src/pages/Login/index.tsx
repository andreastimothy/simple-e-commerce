import { useState } from "react";
import { login } from "../../service/auth";

export default function Login() {
  const defaultFormFields = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div style={{ paddingTop: 80 }}>
      <div>Login Page</div>
      <button onClick={login}>Sign In With Google</button>
      <h2>Register</h2>
      <form
        onSubmit={() => {
          console.log("Registered");
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          required
          value={name}
          name="name"
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
