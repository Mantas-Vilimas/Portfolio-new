import { useContext } from "react";
import Layout from "../../composition/Layout/Layout";
import styles from "./Hero.module.css";
import HeroImageDark from "./HeroImageDark/HeroImageDark";
import HeroImageLight from "./HeroImageLight/HeroImageLight";
import ThemeContext from "../../ThemeContext";

const Hero = () => {
  const { themeGlobal } = useContext(ThemeContext);

  return (
    <Layout>
      <section id="hero" className={styles.content}>
        <h1 className={styles.heading}>Front End Developer</h1>
        <p className={styles.paragraph}>
          I code beautifully simple things and love what I do{" "}
        </p>
        <div>
          {themeGlobal === "dark" ? <HeroImageDark /> : <HeroImageLight />}
        </div>
      </section>
    </Layout>
  );
};
export default Hero;
