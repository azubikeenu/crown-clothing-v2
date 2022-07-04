import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const navigate = useNavigate();
  const goToCheckOut = () => navigate('/checkout');

  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
      </div>

      <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
