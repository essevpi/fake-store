import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import Carousel from "../../components/carousel/Carousel";

import styles from './DailyDeals.styles';

const DailyDeals = () => {
  const [products, setProducts] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setHasLoaded(false);
      const data = await fetch('https://dummyjson.com/products?limit=7&skip=5');
      const {products} = await data.json();

      setHasLoaded(true);
      setProducts(products);
    }

    fetchProducts();
    console.log(products)
  }, []);

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.headingContainer}>
        <h3 className={styles.heading}>
          Daily Deals
        </h3>
      </div>
      <div className={styles.dealsContainer}>
        {/* <div className={styles.dealsWrapper}>
          {hasLoaded &&
            products.map((prod, i) => <ProductCard product={prod} key={i} />)}
        </div> */}
        <Carousel products={products} />
      </div>
    </section>
  );
};

export default DailyDeals;
