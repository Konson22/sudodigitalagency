import {
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
  import { auth } from "../config";

const GoogleAuthHandler = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then(
      (credential) => {
        const user = {
          name: credential.user.displayName,
          email: credential.user.email,
          uid: credential.user.uid,
          avatar: credential.user.photoURL,
        };
        setProfile(user);
      },
      (err) => {
        console.dir(err);
        setMessage(err?.code?.split("/")[1]);
      }
    );
  };

const signUpUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log(userCredential);
    }).catch((err) => console.log(err));
};

const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log(userCredential);
    }).catch((err) => console.log(err));
};

const signOutUser = () => {
signOut(auth).then(() => {
    setProfile(null);
    })
    .catch((err) => console.log(err));
};