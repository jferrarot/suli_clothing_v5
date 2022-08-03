import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () =>{

  const {cartItems,setIsCartOpen} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () =>{
    setIsCartOpen(false);
    navigate('/checkout');
  } 

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'> 
      {cartItems.map((item)=>(
        <CartItem key={item.id} cartItem={item}></CartItem>
      ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );

}

export default CartDropDown;