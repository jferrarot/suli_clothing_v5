import { CartItem as CI } from '../../store/cart/cart.types';
import { CartItemContainer, ItemDetails, Name, Price } from './cart-item.styles';

type CartItemProps = {
    cartItem: CI;
};

const CartItem = ({ cartItem }: CartItemProps) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name}</Name>
                <Price>
                    {quantity} x ${price}
                </Price>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
