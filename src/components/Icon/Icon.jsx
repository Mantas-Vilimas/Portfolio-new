import styles from "./Icon.module.css";

const Icon = ({ image }) => {
  return <img className={`${styles.icon} ${styles[image]}`} alt="icon" />;
};

export default Icon;
