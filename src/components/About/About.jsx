import Layout from "../../composition/Layout/Layout";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about-me">
      <Layout>
        <div className={styles.content}>
          <h2 className={styles.heading}>Hi I'm Mantas. Nice to meet you.</h2>
        <p className={styles.paragraph}> Hi there! I just completed my first baby steps in learning
              front-end development, and I'm excited to continue my journey and
              grow my skills. I'm actively searching for new opportunities to
              learn and expand my knowledge in this field. I'm eager to stay
              curious, work hard, and take on new challenges to continue my
              growth as a front-end developer. Thank you for your support!</p>  
        </div>
        
      </Layout>
    </section>
  );
};

export default About;
