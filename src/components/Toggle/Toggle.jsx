import { useState, useContext } from "react";
import styles from "./Toggle.module.css";
import ThemeContext from "../../ThemeContext";

const currentTheme = localStorage.getItem("theme");

const Toggle = () => {
  const {changeTheme} = useContext(ThemeContext)
  const [theme, setTheme] = useState(currentTheme);

  const handleChange = () => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      changeTheme("dark")
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setTheme("light");
      changeTheme("light")
    }
  };

  return (
    
      <div>
        <label className={styles.switch}>
          <input
            id="toggle"
            type="checkbox"
            onChange={handleChange}
            checked={theme === "dark" ? true : false}
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>

  );
};

export default Toggle;
