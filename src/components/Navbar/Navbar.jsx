import { useMemo, useState } from "react";
import Button from "../Button/Button";
import Toggle from "../Toggle/Toggle";
import styles from "./Navbar.module.css";
import Icon from "../Icon/Icon";
import navbarScroll from "../../utils/navbarScroll";
import { HashLink } from 'react-router-hash-link';
import { routes } from "../../constants/routes";
import {Link} from "react-router-dom";

const Navbar = () => {
   navbarScroll()
  const [barsClicked, setBarsClicked] = useState(false);
 
  const navbarLinks = useMemo(() => {
    return [
      {
        to: "#about-me",
        label: "About Me",
      },
      {
        to: "#skills",
        label: "Skills",
      },
      {
        to: "#projects",
        label: "Projects",
      },
      {
        to: "#social",
        label: "Social",
      },
    ];
  }, []);

  const handleClick = () => {
    if (barsClicked) {
      setBarsClicked(false);
    } else {
      setBarsClicked(true);
    }
  };

  return (
    <nav className={styles.nav}>
      <>
        <Link className={styles.logo} to={routes.home}></Link>
      </>
      <>
        <ul
          className={`${styles.links} ${
            barsClicked ? styles.closed : styles.active
          }`}
        >
          {navbarLinks.map((link, index) => {
            return (
              <li key={`${index}${link.label}`}>
                <HashLink className={styles.link} to={`/${link.to}`}>{link.label}</HashLink>
              </li>
            );
          })}
          <li>
            <Button label={"Contact Me"} link={routes.contact} />
          </li>
          <li>
            
            <Toggle />
          </li>
        </ul>
      </>

      <button className={styles.mobile} onClick={handleClick}>
        {barsClicked ? <Icon image="bars" /> : <Icon image="close" />}
      </button>
    </nav>
  );
};

export default Navbar;
