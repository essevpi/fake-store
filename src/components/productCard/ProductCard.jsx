import Button from '../button/Button';
import ProductRating from './productRating/ProductRating';
import { getDiscountedPrice } from '../../utils/utils';

import styles from './ProductCard.styles';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img
        src={product?.thumbnail}
        className='aspect-square rounded-md h-100%'
      />
      <div className={styles.productCardItem}>
        <span className='truncate ...'>{product?.brand}</span>{' '}
        <span>{product?.title}</span>
      </div>
      <div className={styles.productCardPriceContainer}>
        <span className={styles.productCardPrice}>
          {getDiscountedPrice(product?.price, product?.discountPercentage)}
          &euro;
        </span>
        <span className={styles.productCardPriceBefore}>
          {product?.price}&euro;
        </span>
      </div>
      <div className={styles.productCardDiscountInner}>
        <div className={styles.productCardDiscountRibbon}>
          {Math.floor(product?.discountPercentage)}% OFF
        </div>
      </div>
      <ProductRating rating={product.rating} />
      <div className={styles.productCardActionsContainer}>
        <Button variant='outlined'>View</Button>
        <Button variant='primary'>Buy</Button>
      </div>
    </div>
  );
};

export default ProductCard;
