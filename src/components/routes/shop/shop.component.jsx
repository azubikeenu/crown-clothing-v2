import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/cartegories-preview.component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
