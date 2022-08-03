import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
    Arrow,
    CheckoutItemContainer,
    Image,
    Name,
    Price,
    Quantity,
    RemoveButton,
    Value,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;

    const { addItemToCart, removeItemFromCart, clearItemFromCart } =
        useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <Image>
                <img src={imageUrl} alt={`${name}`} />
            </Image>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
