import { useState } from 'react';
import Button from '../button/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCart } from 'react-icons/io5';

import styles from './CartMenu.styles';

const CartMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={styles.cartMenuContainer}>
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            className={styles.cartMenuDrawer}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
          >
            <div className={styles.cartMenuHeadingContainer}>
              <span className={styles.cartMenuHeading}>Your Cart</span>
            </div>
            <div className={styles.cartMenuBody}>
              <Button variant='primary'>Primary</Button>
              <Button variant='outlined'>Secondary</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <IoCart
        className={styles.cartIcon}
        onClick={() => setIsDrawerOpen((prev) => !prev)}
      />
    </div>
  );
};

export default CartMenu;
