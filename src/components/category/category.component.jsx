import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { useState, useEffect, Fragment } from 'react';

import ProductCard from '../product_card/product-card.component';
import { CategoryContainer, CategoryContainerTitle } from './category.styles';
import { selectCategoriesMap } from '../../store/categories/cartegories.selector';

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryContainerTitle> {category.toUpperCase()}</CategoryContainerTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
