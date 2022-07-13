import { useEffect, useState, createContext } from 'react';
import { getCategories } from '../utils/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCatgeoriesMap = async () => {
      const categoryMap = await getCategories();
      setCategoriesMap(categoryMap);
    };
    getCatgeoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
