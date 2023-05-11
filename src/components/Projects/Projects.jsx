import styles from "./Projects.module.css";
import { projectsList } from "../../projects/projectsList";
import ProjectCard from "../ProjectCard/ProjectCard";
import Layout from "../../composition/Layout/Layout";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";

const Projects = () => {
  return (
    <Layout>
      <section id="projects" className={styles.section}>
        <div>
          <h2 className={styles.heading}>My recent projects</h2>
          <p className={styles.text}>
            Here are a few past projects I've worked on. Want to see more?{" "}
            <Link className={styles.link} to={routes.contact}>Email me</Link>
          </p>
        </div>

        <div className={styles.container}>
          {projectsList.map((card) => {
            return (
              <div key={card.id}>
                <ProjectCard label={card.label} img={card.image} id={card.id} />
              </div>
            );
          })}
        </div>

        <div>
          <Button
            label={"See more on GitHub"}
            link={"https://github.com/Mantas-Vilimas"}
            target={"_blank"}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
