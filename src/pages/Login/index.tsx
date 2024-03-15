import { login } from "../../service/auth";
import RegisterForm from "./components/RegisterForm";

export default function Login() {
  return (
    <div style={{ paddingTop: 80 }}>
      <h1>Login Page</h1>
      <button onClick={login}>Sign In With Google</button>
      <RegisterForm />
    </div>
  );
}
