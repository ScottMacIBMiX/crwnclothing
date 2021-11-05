// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";   
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSPkSzd67j3sTxiig-gkdBvNNtsQqsfvY",
  authDomain: "crwn-db-bbc46.firebaseapp.com",
  projectId: "crwn-db-bbc46",
  storageBucket: "crwn-db-bbc46.appspot.com",
  messagingSenderId: "172888253825",
  appId: "1:172888253825:web:e67a86dce267bda52c3480",
  measurementId: "G-4DEBZT68XP"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
