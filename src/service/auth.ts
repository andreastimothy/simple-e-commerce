import { GoogleAuthProvider, User, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseApp } from "./../utils/firebase/firebase.config";

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

const db = getFirestore();
const auth = getAuth(firebaseApp);
const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const login = async () => {
  const { user } = await signInWithGooglePopup();
  await createUser(user);
};

export const createUser = async (userAuth: User) => {
  //Hey! Give me the reference of the data from "users" in the "db" with this userID
  const userDocRef = doc(db, "users", userAuth.uid);

  //Get the data of the user from the db
  const userSnapshot = await getDoc(userDocRef);

  //Check if user exists, if not, create it in the db
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};
