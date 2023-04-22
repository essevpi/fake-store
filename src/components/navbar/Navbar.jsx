import CartMenu from '../cartMenu/CartMenu';
import ThemeToggle from '../themeToggle/ThemeToggle';

import styles from './Navbar.styles';

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarWrapper}>
        <span className={styles.logo}>FAKESTORE</span>
        <div className={styles.navbarActions}>          
            <ThemeToggle />          
            <CartMenu />
            <CartMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
