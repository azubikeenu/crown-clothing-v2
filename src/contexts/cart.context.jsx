import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducers/reducer.utils';

export const CartContext = createContext({
  isCartOpened: false,
  setIsCartOpened: () => null,
  cartItems: [],
  addToCartItems: () => null,
  cartCount: 0,
  removeItem: () => null,
  decrementCount: () => null,
  total: 0,
  setTotal: () => null,
});

const CART_ACTIONS = {
  SET_IS_CART_OPENED: 'SET_IS_CART_OPENED',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
};

const INITIAL_STATE = {
  isCartOpened: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return { ...state, ...payload };
    case CART_ACTIONS.SET_IS_CART_OPENED:
      return { ...state, isCartOpened: payload };
    default:
      throw new Error(`Unhandled type  : ${type} in cartReducer`);
  }
};

/*Remove an item from the cart */
const removeItemFromCart = (product, cartItems) =>
  cartItems.filter((item) => item.id !== product.id);

/*Decrement the cart Item count */
const decrementProductCount = (product, cartItems) => {
  if (product.quantity === 1) return removeItemFromCart(product, cartItems);
  return cartItems.map((item) => {
    return item.id === product.id
      ? { ...item, quantity: product.quantity - 1 }
      : item;
  });
};
/*Add an item to the cart  */
const addCartItem = (product, cartItems) => {
  const isProductExisting = cartItems.find((item) => item.id === product.id);
  if (isProductExisting) {
    return cartItems.map((item) => {
      return item.id === isProductExisting.id
        ? { ...item, quantity: isProductExisting.quantity + 1 }
        : item;
    });
  }
  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  // const [isCartOpened, setIsCartOpened] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [total, setTotal] = useState(0);

  const [{ cartItems, cartCount, total, isCartOpened }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItems = (newCartItems) => {
    const newTotal =
      newCartItems && newCartItems.length
        ? newCartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )
        : 0;
    const newCartCount = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    const payload = {
      cartItems: newCartItems,
      cartCount: newCartCount,
      total: newTotal,
    };

    dispatch(createAction(CART_ACTIONS.SET_CART_ITEMS, payload));
  };

  const setIsCartOpened = (boolean) => {
    dispatch(createAction(CART_ACTIONS.SET_IS_CART_OPENED, boolean));
  };

  const addItemToCart = (itemToAdd) => {
    const newCartItems = addCartItem(itemToAdd, cartItems);
    updateCartItems(newCartItems);
  };

  const decrementCount = (product) => {
    const newCartItems = decrementProductCount(product, cartItems);
    updateCartItems(newCartItems);
  };

  const removeItem = (product) => {
    const newCartItems = removeItemFromCart(product, cartItems);
    updateCartItems(newCartItems);
  };

  // useEffect(() => {
  //   const newCartCount = cartItems.reduce(
  //     (total, item) => total + item.quantity,
  //     0
  //   );
  //   setCartCount(newCartCount);
  // }, [cartItems]);

  // useEffect(() => {
  //   const newTotal =
  //     cartItems && cartItems.length
  //       ? cartItems.reduce(
  //           (total, item) => total + item.price * item.quantity,
  //           0
  //         )
  //       : 0;
  //   setTotal(newTotal);
  // }, [cartItems]);

  const value = {
    isCartOpened,
    setIsCartOpened,
    addItemToCart,
    cartItems,
    cartCount,
    removeItem,
    decrementCount,
    total,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
