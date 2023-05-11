import styles from "./Icon.module.css";

const Icon = ({ image }) => {
  return <div className={`${styles.icon} ${styles[image]}`}> </div>;
};

export default Icon;
