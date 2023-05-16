import { useParams } from "react-router-dom";
import { projectsList } from "../../projects/projectsList";
import styles from "./ProjectPage.module.css";
import Layout from "../../composition/Layout/Layout";
import { useEffect } from "react";
import Button from "../../components/Button/Button";
import CallToAction from "../../components/CallToAction/CallToAction";

const randomNumber = () => {
  const number = Math.ceil(Math.random() * 1000);
  return number;
};

const ProjectPage = () => {
  const { id } = useParams();

  const project =
    projectsList.find((project) => project.id === Number.parseInt(id)) || {};

  useEffect(() => {
    window.scrollTo(0, 100);
  }, []);

  return (
    <section className={styles.main}>
      <div>
        <img className={styles.image} src={project.image} alt={project.label} />
      </div>

      <Layout>
        <div className={styles.content}>
          <h3 className={styles.heading}>{project.label}</h3>

          <div className={styles.description}>{project.description}</div>

          <div className={styles.videoContainer}><video className={styles.video} src={project.video} controls="controls" loop /></div>

          <h4 className={styles.subheading}>Tools used</h4>

          <ul className={styles.tools}>
            {project.tools.map((tool) => {
              return <li className={styles.tool} key={randomNumber()}>{tool}</li>;
            })}
          </ul>

          <h4 className={styles.subheading}>Challenge</h4>

          <p className={styles.paragraph}>{project.challenges}</p>

          <h4 className={styles.subheading}>Summary</h4>

          <p className={styles.paragraph}>{project.summary}</p>

          <div className={styles.buttons}>
            <Button label="Live View" link={project.visit} />
            <Button label="Source Code" link={project.git} />
          </div>
        </div>
      </Layout>
      <CallToAction/>
    </section>
  );
};

export default ProjectPage;
