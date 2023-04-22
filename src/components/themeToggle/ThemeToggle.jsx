import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { IoMoon, IoSunny } from 'react-icons/io5';

import styles from './ThemeToggle.styles';

const ThemeToggle = () => {
  const { theme, dispatch } = useContext(ThemeContext);

  return (
    <label className={styles.label}>
      <input
        type='checkbox'
        value={theme}
        onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
        className={styles.input}
        checked={theme === 'dark' ? true : false}
        readOnly
      />
      <IoSunny className={styles.sunIcon} />
      <IoMoon className={styles.moonIcon} />
      <div className={styles.toggle} />
    </label>
  );
};

export default ThemeToggle;
