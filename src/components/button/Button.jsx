import styles from './Button.styles';

const Button = ({ children, variant }) => {
  return (
    <button className={`${styles.baseButton} ${styles[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
