import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { setIsCartOpened, isCartOpened, cartCount } = useContext(CartContext);
  const toggleIsCartOpened = () => setIsCartOpened(!isCartOpened);
  return (
    <CartIconContainer onClick={toggleIsCartOpened}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
