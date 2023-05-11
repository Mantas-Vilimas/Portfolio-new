import Layout from "../../composition/Layout/Layout";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills">
      <Layout>
        <div className={styles.container}>
          <div className={`${styles.card} ${styles.design}`}>
            <div className={styles.logo}></div>
            <div>
              <span className={styles.text}>
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </span>
            </div>
            <div>
              <h3>Things I enjoy</h3>
              <p>CSS, Bootstrap, Sass UX, UI</p>
            </div>
            <div>
              <h3>Design tools</h3>
              <ul>
                <li>Figma</li>
                <li>Font Awesome</li>
                <li>Adobe Photoshop</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.card} ${styles.developer}`}>
            <div className={styles.logo}></div>
            <div>
              <span className={styles.text}>
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </span>
            </div>
            <div>
              <h3>Things I enjoy</h3>
              <p>Building logic</p>
            </div>
            <div>
              <h3>Tools</h3>
              <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>Yup</li>
                <li>Git</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.card} ${styles.personal}`}>
            <div className={styles.logo}></div>
            <div>
              <span className={styles.text}>
                I genuinely care about people, and love helping fellow
                programmers work on their craft.
              </span>
            </div>
            <div>
              <h3>Things I enjoy</h3>
              <p>Seeking for knowledge</p>
            </div>
            <div>
              <h3>Some personal preferences</h3>
              <ul>
                <li>Problem solving</li>
                <li>Team work</li>
                <li>Friendly</li>
                <li>Open minded</li>
                <li>Dreamer</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Skills;
