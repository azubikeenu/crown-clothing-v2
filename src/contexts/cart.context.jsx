import { useState, createContext, useEffect } from 'react';

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

const removeItemFromCart = (product, cartItems) =>  cartItems.filter((item) => item.id !== product.id);



const decrementProductCount = (product, cartItems) => {
  if (product.quantity === 1) return removeItemFromCart(product, cartItems);
  return cartItems.map((item) => {
    return item.id === product.id
      ? { ...item, quantity: product.quantity - 1 }
      : item;
  });
};

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
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);


  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(itemToAdd, cartItems));
  };

  const decrementCount = (product) => {
    setCartItems(decrementProductCount(product, cartItems));
  };

  const removeItem = (product) => {
    setCartItems(removeItemFromCart(product, cartItems));
  };


  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotal =
      cartItems && cartItems.length
        ? cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )
        : 0;
    setTotal(newTotal);
  }, [cartItems]);

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
