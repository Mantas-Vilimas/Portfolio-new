import styles from "./Layout.module.css"

const Layout = ({ children }) => {
  return <div className={styles.flex}>{children}</div>;
};

export default Layout;
