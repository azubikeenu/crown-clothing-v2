import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../product_card/product-card.component';
import { CategoryContainer, CategoryContainerTitle } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
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
