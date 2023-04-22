import { useEffect, useState } from 'react';

import styles from './Hero.styles';
import ProductCard from '../productCard/ProductCard';

const Hero = () => {
  const [featuredProduct, setFeaturedProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('https://dummyjson.com/products/2');
      const product = await res.json();

      setFeaturedProduct(product);
    };

    console.log(featuredProduct);
    fetchProduct();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>HERO</div>
        <ProductCard product={featuredProduct} />
      </div>
    </div>
  );
};

export default Hero;
