import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CategoryItem } from '../../store/categories/categories.types';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { Footer, Name, Price, ProductCardContainer } from './product-card.styles';

type ProductCardProp = {
    product: CategoryItem;
};

const ProductCard = ({ product }: ProductCardProp) => {
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
                Add to card
            </Button>
        </ProductCardContainer>
    );
};

export default ProductCard;
