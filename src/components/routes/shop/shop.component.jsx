import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import CategoriesPreview from '../categories-preview/cartegories-preview.component';
import Category from '../../category/category.component';
import { getCategories } from '../../../utils/firebase.utils';
import { setCategoriesMap } from '../../../store/categories/categories.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const categories = await getCategories();
      dispatch(setCategoriesMap(categories));
    })();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
