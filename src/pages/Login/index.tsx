import { login } from "../../service/auth";

export default function Login() {
  return (
    <div style={{ paddingTop: 80 }}>
      <div>Login Page</div>
      <button onClick={login}>Sign In With Google</button>
    </div>
  );
}
