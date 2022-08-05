import { useNavigate } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import Button from '../button/button.component';

import {
    CartDropDownContainer,
    CartItems,
    EmptyMessage,
} from './cart-dropdown.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const goToCheckoutHandler = () => {
        dispatch(setIsCartOpen(false));
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
