import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDoc = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  // get the database reference
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (err) {
      console.log('Error Creating the user', err.message);
    }
  }
  return userDocRef;
};
