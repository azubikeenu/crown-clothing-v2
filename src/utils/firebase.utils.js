import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDlZFNYHtORaNWUlfFJOOMSHu-KIZvgWMY',
  authDomain: 'crown-clothing-db-177ae.firebaseapp.com',
  projectId: 'crown-clothing-db-177ae',
  storageBucket: 'crown-clothing-db-177ae.appspot.com',
  messagingSenderId: '670522940298',
  appId: '1:670522940298:web:6356969852a1a64fcd4673',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(); // This keeps track of the authentication state through out the application

export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Store the user in the database

export const db = getFirestore();

export const createUserDoc = async (userAuth, objProps = {}) => {
  if (!userAuth) return;
  // get the database reference
  const userDocRef = doc(db, 'users', userAuth.uid); // dbInstance , collectionName , userAuthenticationId(uid)
  // get the document snapshot
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...objProps });
    } catch (err) {
      console.log('Error Creating the user', err.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  auth,
  email,
  password
) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
