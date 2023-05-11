import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ label, link, target, color, onClick }) => {
  return (
    <button onClick={onClick}
      className={` ${styles.button} ${
        color === "light" ? styles.light : styles.dark
      }`}
    >
      {link && (
        <Link target={target} className={styles.link} to={link}>
          {label}
        </Link>
      )}

      {link ? "" : label}
    </button>
  );
};

export default Button;
