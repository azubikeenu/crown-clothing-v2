import './product-card.styles.scss';
import Button from '../button/button.component';

const ProductCard = ({ product }) => {
  const { price, name, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="cost">{price}</span>
      </div>
      <Button type="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;