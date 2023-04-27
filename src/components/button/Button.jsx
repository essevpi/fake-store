import styles from './Button.styles';

const Button = ({ children, variant, onClick, customStyle }) => {
  return (
    <button
      className={`${styles.baseButton} ${styles[variant]} ${customStyle || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
