import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
    Arrow,
    BaseSpan,
    CheckoutItemContainer,
    Image,
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
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
