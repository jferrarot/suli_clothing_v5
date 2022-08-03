import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import {
    CartDropDownContainer,
    CartItems,
    EmptyMessage,
} from './cart-dropdown.styles.jsx';

const CartDropDown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item}></CartItem>
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    );
};

export default CartDropDown;
