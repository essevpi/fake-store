import { useEffect, useState } from 'react';
import ProductList from '../../components/productList/ProductList';
import TabWindow from '../../components/tabWindow/TabWindow';

import styles from './Products.styles';


const Products = () => {
  const [products, setProducts] = useState([]);
  const productsItems = [
    {
      label: 'smartphones',
      item: <ProductList products={products} />,
    },
    {
      label: 'laptops',
      item: <ProductList products={products} />,
    },
  ];
  const [selectedTab, setSelectedTab] = useState(productsItems[0].label);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/category/${selectedTab}`
      );
      const data = await res.json();

      setProducts(data.products);
    };

    fetchProducts();
  }, [selectedTab]);

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.headingContainer}>
        <h3 className={styles.heading}>PRODUCTS</h3>
      </div>
      <div className={styles.productsContainer}>
        <TabWindow
          items={productsItems}
          selectedTab={selectedTab}
          onTabSelect={setSelectedTab}
        />
      </div>
    </section>
  );
};

export default Products;
