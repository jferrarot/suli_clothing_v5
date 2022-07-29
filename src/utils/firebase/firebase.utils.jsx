import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: 'AIzaSyB5NrxBfRcm_OB5xJAXWW8cLSXCIcDfcG8',
  authDomain: 'suli-clothing-db.firebaseapp.com',
  projectId: 'suli-clothing-db',
  storageBucket: 'suli-clothing-db.appspot.com',
  messagingSenderId: '893718380900',
  appId: '1:893718380900:web:924f700efe56a9716e7a71'
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>signInWithPopup(auth,provider);
