import { IoStar, IoStarOutline } from 'react-icons/io5';

import styles from './ProductRating.styles';

const ProductRating = ({ rating }) => {
  return (
    <div className={styles.ratingContainer}>
      {[...Array(5)].map((star, i) => {
        if (i < Math.round(rating))
          return <IoStar className={styles.starIcon} key={i} />;
        return <IoStarOutline className={styles.starIcon} key={i} />;
      })}
    </div>
  );
};

export default ProductRating;
