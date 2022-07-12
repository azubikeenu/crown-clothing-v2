import { useEffect } from 'react';
import { createContext, useState } from 'react';

import { getCategories } from '../utils/firebase.utils';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  useEffect(() => {
    const getCatgeoriesMap = async () => {
      const categories = await getCategories();
      console.log(categories);
    };

    getCatgeoriesMap();
  }, []);

  const [products, setProducts] = useState([]);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
