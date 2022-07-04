import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const {
    setIsCartOpened,
    isCartOpened,
    cartCount,
  } = useContext(CartContext);
  const toggleIsCartOpened = () => setIsCartOpened(!isCartOpened);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpened}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
