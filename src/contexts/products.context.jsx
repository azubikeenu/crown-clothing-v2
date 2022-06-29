import { createContext, useState } from 'react';
import SHOP_DATA from '../shop-data.json';
export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};
