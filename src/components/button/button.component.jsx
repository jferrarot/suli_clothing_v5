/*
  default 
  inverted
  google sign in 
*/

import './button.styles.scss';

const BUTTON_TYPLE_CLASSES = {
  google:'google-sign-in',
  inverted:'inverted'
}


const Button =({children,buttonType,...otherProps}) =>{
  return <button className={`button-container ${BUTTON_TYPLE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
}

export default Button;