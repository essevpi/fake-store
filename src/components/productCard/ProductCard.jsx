import Button from '../button/Button';
import { getDiscountedPrice } from '../../utils/utils';
import { IoStar, IoStarOutline } from 'react-icons/io5';

import styles from './ProductCard.styles';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <span className={styles.productCardHeading}>Daily Deal</span>
      <img
        src={product?.thumbnail}
        className='w-full object-contain rounded-md'
      />
      <span className={styles.productCardItem}>
        {product?.brand} {product?.title}
      </span>
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
      <div className={styles.productCardRating}>
        {[...Array(5)].map((star, i) =>
          i < Math.round(product.rating) ? (
            <IoStar className={styles.productCardStar} key={i} />
          ) : (
            <IoStarOutline className={styles.productCardStar} key={i} />
          )
        )}
      </div>
      <div className={styles.productCardActionsContainer}>
        <Button variant='outlined'>View</Button>
        <Button variant='primary'>Buy</Button>
      </div>
    </div>
  );
};

export default ProductCard;
