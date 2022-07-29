import {auth,signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react'; 
import { getRedirectResult } from 'firebase/auth';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () =>{

  useEffect(()=>{
    async function getUserFromRedirect(){
      const response = await getRedirectResult(auth);
      if (response) {
        const userDoctRef = await createUserDocumentFromAuth(response.user);
      }
    }
    getUserFromRedirect();
  },[]);

  const logGoogleUser = async() =>{
    const response = await signInWithGooglePopup();
    const userDoctRef = await createUserDocumentFromAuth(response.user);
    //console.log(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUpForm/>
    </div>
  )
}

export default SignIn