import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    categories && (
      <div className="directory-container">
        {categories.map(({ id, ...category }) => (
          <CategoryItem key={id} category={category} />
        ))}
      </div>
    )
  );
};

export default Directory;
