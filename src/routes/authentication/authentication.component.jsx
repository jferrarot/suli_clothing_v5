import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () =>{

  // useEffect(()=>{
  //   async function getUserFromRedirect(){
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDoctRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   getUserFromRedirect();
  // },[]);

  // const logGoogleUser = async() =>{
  //   const response = await signInWithGooglePopup();
  //   const userDoctRef = await createUserDocumentFromAuth(response.user);
  //   //console.log(response);
  // };
  return (
    <div className='authentication-container'>
      <SignInForm/>
      <SignUpForm/>
      {/* <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  )
}

export default Authentication