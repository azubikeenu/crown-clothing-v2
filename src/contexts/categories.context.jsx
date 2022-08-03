import { useEffect, useState, createContext } from 'react';
import { getCategories } from '../utils/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});


// Utility function to transform the categories array to a HashMap
const getCategoriesMap = (categories) => {
  categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};


export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});


  useEffect(() => {
    (async () => {
      const categories = await getCategories();
      setCategoriesMap(getCategoriesMap(categories));
    })();
  }, []);


  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
