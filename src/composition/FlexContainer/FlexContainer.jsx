import styles from "./FlexContainer.module.css";

const FlexContainer = ({ children }) => {
  return <div className={styles.flex}>{children}</div>;
};

export default FlexContainer;
