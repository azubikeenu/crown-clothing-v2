import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
  const navigate = useNavigate();

  //absolute link
  const goToCheckOut = () => navigate('/checkout');

  const { cartItems } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span>Your cart is empty </span>
        )}
      </CartItems>

      <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
