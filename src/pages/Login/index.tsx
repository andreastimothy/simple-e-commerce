import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../../utils/firebase/firebase.config";

export default function Login() {
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account",
  });

  const auth = getAuth(firebaseApp);
  const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  const login = async () => {
    const resp = await signInWithGooglePopup();
    console.log(resp);
  };

  return (
    <>
      <div>Login Page</div>
      <button onClick={login}>Sign In With Google</button>
    </>
  );
}
