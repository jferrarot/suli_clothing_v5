import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import {
    CheckoutContainer,
    CheckoutHeader,
    CheckoutTotal,
    HeaderBlock,
} from './checkout.styles.jsx';
import { useSelector } from 'react-redux';
import {
    selectCartItems,
    selectCartTotal,
} from '../../store/cart/cart.selector';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => {
                return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
            })}
            <CheckoutTotal className='total'>${total}</CheckoutTotal>
            <PaymentForm></PaymentForm>
        </CheckoutContainer>
    );
};

export default Checkout;
