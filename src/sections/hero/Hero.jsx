import { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import ProductCard from '../../components/productCard/ProductCard';
import styles from './Hero.styles';

const Hero = () => {
  const [featuredProduct, setFeaturedProduct] = useState({});

  useEffect(() => {
    const randId = Math.floor(Math.random() * (100 - 1) + 1);
    const fetchProduct = async () => {
      const data = await fetch(`https://dummyjson.com/products/${randId}`);
      const product = await data.json();

      setFeaturedProduct(product);
    };
    fetchProduct();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heroTextTab}>
          <h2 className={styles.heroHeading}>Welcome to our store!</h2>
          <h3 className={styles.heroSubHeading}>
            Good products at good prices
          </h3>
          <p className={styles.heroDesc}>
            Text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text{' '}
          </p>
          <div>
            <Button variant='primary'>Shop Now</Button>
          </div>
        </div>
        <div className={styles.heroImgContainer}>
          <div className={styles.heroImg} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
