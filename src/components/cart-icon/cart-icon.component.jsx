import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
    CartIconContainer,
    ItemCount,
    ShoppingIconStyle,
} from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, cartCount, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconStyle />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
