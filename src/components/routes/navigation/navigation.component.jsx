import { Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../../assets/crown.svg';
import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cartdropdown.component';

import { UserContext } from '../../../contexts/user.context';
import { CartContext } from '../../../contexts/cart.context';

import { signOutUser } from '../../../utils/firebase.utils';

import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinksContainer,
} from './navigation.styles';

const Navigation = () => {
  // whenever a value inside the UseContext(currentUser) updates , the component is re-rendered
  const { currentUser } = useContext(UserContext);
  const { isCartOpened } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              {' '}
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpened && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
