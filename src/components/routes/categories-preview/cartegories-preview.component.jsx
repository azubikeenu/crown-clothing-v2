import { Fragment } from 'react';
import { useSelector } from 'react-redux/es/exports';
import CategoryPreview from '../../category-preview/category-preview.component';
import { selectCategoriesMap } from '../../../store/categories/cartegories.selector';

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
