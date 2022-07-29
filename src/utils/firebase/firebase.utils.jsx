import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc,  setDoc} from 'firebase/firestore'


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
export const signInWithGoogleRedirect = () =>signInWithRedirect(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) =>{
  if(!userAuth) return;
  const userDocRef = doc(db,'users',userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const{displayName,email} =userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation //it overrides displayName if exist
      });
    } catch (error){
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email,password) =>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password);
}
